import fs from 'fs';
import path from 'path';
import connectMongo from "@/lib/mongodb";
import Notice from '@/models/Notice';

export async function POST(req) {

  try {

    await connectMongo();

    const { title, description, date, file, fileExtension } = await req.json();
    if (!title || !description || !date || !file || !fileExtension) {
      return new Response(JSON.stringify({ success: false, message: 'All fields are required' }), { status: 400 });
    }

     // Decode base64 string and write the file
     const buffer = Buffer.from(file, 'base64');
     const fileName = `${Date.now()}-${Math.floor(Math.random() * 10000)}.${fileExtension}`; 
     const filePath = path.join(process.cwd(), 'public', 'temp', fileName);

     const tempDir = path.join(process.cwd(), 'public', 'temp');
     if (!fs.existsSync(tempDir)) {
         fs.mkdirSync(tempDir, { recursive: true });
     }

     fs.writeFileSync(filePath, buffer);


    const notice = new Notice({
      title,
      description,
      date,
      fileLink: `/temp/${fileName}`
    });


    await notice.save();

    return new Response(JSON.stringify({ success: true, data: notice }), { status: 201 });

  } catch (error) {
    console.error('Error Saving Notice:', error.message);
    return new Response(JSON.stringify({ success: false, message: error.message }), { status: 400 });
  }
}
