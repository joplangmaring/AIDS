import fs from 'fs';
import path from 'path';
import connectMongo from "@/lib/mongodb";
import Notice from '@/models/Notice';

export const config = {
    api: {
        bodyParser: false, // Disable Next.js' default body parser
    },
};

export async function POST(req) {
    console.log('Connecting to MongoDB...');
    await connectMongo();
    console.log('MongoDB connected');
  
    try {
      const chunks = [];
      const reader = req.body.getReader();
  
      let done = false;
      while (!done) {
        const { value, done: streamDone } = await reader.read();
        if (value) chunks.push(value);
        done = streamDone;
      }
  
      const buffer = Buffer.concat(chunks);
      const boundary = req.headers.get('content-type').split('boundary=')[1];
      const parts = buffer.toString().split(`--${boundary}`);
  
      let filePath, fileName, noticeData = {};
  
      parts.forEach((part) => {
        if (part.includes('Content-Disposition')) {
          if (part.includes('filename=')) {
            const contentDisposition = part.match(/filename="(.+)"/);
            // Extract the original file name without modifying it
            fileName = contentDisposition ? contentDisposition[1] : 'file';
            
            const fileStartIndex = part.indexOf('\r\n\r\n') + 4;
            const fileContent = part.slice(fileStartIndex, part.lastIndexOf('\r\n'));
            const uploadDir = path.join(process.cwd(), 'public', 'temp');
            if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });
            filePath = path.join(uploadDir, fileName);
            fs.writeFileSync(filePath, fileContent, 'binary');
          } else {
            const fieldStartIndex = part.indexOf('\r\n\r\n') + 4;
            const fieldNameMatch = part.match(/name="(.+?)"/);
            const fieldName = fieldNameMatch ? fieldNameMatch[1] : null;
            const fieldValue = part.slice(fieldStartIndex, part.lastIndexOf('\r\n')).trim();
  
            if (fieldName) noticeData[fieldName] = fieldValue;
          }
        }
      });
  
      // Validate and Save Notice Data
      noticeData.date = new Date(noticeData.date); // Ensure `date` is a valid Date
      console.log('Notice Data to Save:', { ...noticeData, fileLink: `/temp/${fileName}` });
  
      const notice = await Notice.create({
        ...noticeData,
        fileLink: `/temp/${fileName}`, // Public file path
      });
  
      return new Response(JSON.stringify({ success: true, data: notice }), { status: 201 });
    } catch (error) {
      console.error('Error Saving Notice:', error.message);
      return new Response(JSON.stringify({ success: false, message: error.message }), { status: 400 });
    }
}
