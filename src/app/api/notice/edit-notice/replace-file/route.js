
import fs from 'fs';
import path from 'path';
import connectMongo from "@/lib/mongodb";
import Notice from '@/models/Notice';

export async function PUT(req) {

    await connectMongo();

    try {

        const url = new URL(req.url);
        const noticeId = url.searchParams.get('id');
        if (!noticeId) {
            return new Response(
                JSON.stringify({ success: false, message: 'Notice ID is required' }),
                { status: 400 }
            );
        }
        
        const existingNotice = await Notice.findById(noticeId);
        if (!existingNotice) {
            return new Response(
                JSON.stringify({ success: false, message: 'Notice not found' }),
                { status: 404 }
            );
        }

        //Delete kardo existing file ko jagah bachane k liye
        if (existingNotice.fileLink) {
            const oldFilePath = path.join(process.cwd(), 'public', existingNotice.fileLink);
            if (fs.existsSync(oldFilePath)) {
                fs.unlinkSync(oldFilePath);
            }
        }
        
        const { file, fileExtension } = await req.json();
        if (!file || !fileExtension) {
            return new Response(JSON.stringify({ success: false, message: 'All fields are required' }), { status: 400 });
        }

        const buffer = Buffer.from(file, 'base64');
        const fileName = `${Date.now()}-${Math.floor(Math.random() * 10000)}.${fileExtension}`;
        const filePath = path.join(process.cwd(), 'public', 'temp', fileName);

        const tempDir = path.join(process.cwd(), 'public', 'temp');
        if (!fs.existsSync(tempDir)) {
            fs.mkdirSync(tempDir, { recursive: true });
        }

        fs.writeFileSync(filePath, buffer);

        const updatedNotice = await Notice.findByIdAndUpdate(
            noticeId,
            { fileLink: `/temp/${fileName}` },
            { new: true }
        );


        return new Response(
            JSON.stringify({ success: true, data: updatedNotice }),
            { status: 200 }
        );

    } catch (error) {
        console.error('Error Updating Notice:', error.message);
        return new Response(
            JSON.stringify({ success: false, message: error.message }),
            { status: 400 }
        );
    }
}
