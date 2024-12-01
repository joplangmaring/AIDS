
import fs from 'fs';
import path from 'path';
import connectMongo from "@/lib/mongodb";
import Notice from '@/models/Notice';

export const config = {
    api: {
        bodyParser: false, // Disable Next.js' default body parser
    },
};

export async function PUT(req) {
    console.log('Connecting to MongoDB...');
    await connectMongo();
    console.log('MongoDB connected');

    try {
        // Read the multipart form data
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
        const url = new URL(req.url);
        const noticeId = url.searchParams.get('id');

        // Loop through the parts and extract form fields and file data
        parts.forEach((part) => {
            if (part.includes('Content-Disposition')) {
                // Check if this part is a file upload
                if (part.includes('filename=')) {
                    const contentDisposition = part.match(/filename="(.+)"/);
                    // Use the original filename without adding a timestamp
                    fileName = contentDisposition ? contentDisposition[1] : 'file';

                    const fileStartIndex = part.indexOf('\r\n\r\n') + 4;
                    const fileContent = part.slice(fileStartIndex, part.lastIndexOf('\r\n'));
                    const uploadDir = path.join(process.cwd(), 'public', 'temp');
                    if (!fs.existsSync(uploadDir)) fs.mkdirSync(uploadDir, { recursive: true });

                    filePath = path.join(uploadDir, fileName);
                    fs.writeFileSync(filePath, fileContent, 'binary');
                } else {
                    // Handle form fields
                    const fieldStartIndex = part.indexOf('\r\n\r\n') + 4;
                    const fieldNameMatch = part.match(/name="(.+?)"/);
                    const fieldName = fieldNameMatch ? fieldNameMatch[1] : null;
                    const fieldValue = part.slice(fieldStartIndex, part.lastIndexOf('\r\n')).trim();

                    if (fieldName) {
                        noticeData[fieldName] = fieldValue;
                    }
                }
            }
        });

        // Validate that the noticeId was found
        if (!noticeId) {
            throw new Error('Notice ID is required for updating.');
        }

        // Find the existing notice to update
        const existingNotice = await Notice.findById(noticeId);
        if (!existingNotice) {
            throw new Error('Notice not found.');
        }

        // If a new file was uploaded, replace the old file
        if (fileName) {
            const oldFilePath = path.join(process.cwd(), 'public', existingNotice.fileLink);
            if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath); // Delete the old file
            }
            noticeData.fileLink = `/temp/${fileName}`; // Update file link in data
        } else {
            // If no new file, keep the existing file link
            noticeData.fileLink = existingNotice.fileLink;
        }

        // Make sure to update fields like title, description, date, etc.
        noticeData.date = new Date(noticeData.date); // Ensure `date` is a valid Date

        // Update the notice with new data
        const updatedNotice = await Notice.findByIdAndUpdate(noticeId, noticeData, { new: true });

        // Return success response
        return new Response(
            JSON.stringify({ success: true, data: updatedNotice }),
            { status: 200 }
        );
    } catch (error) {
        console.error('Error Updating Notice:', error.message);

        // Return error response
        return new Response(
            JSON.stringify({ success: false, message: error.message }),
            { status: 400 }
        );
    }
}
