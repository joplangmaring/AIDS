
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

        const { title, description, date } = await req.json();
        if (!title || !date) {
            return new Response(JSON.stringify({ success: false, message: 'All fields are required' }), { status: 400 });
        }

        const existingNotice = await Notice.findById(noticeId);
        if (!existingNotice) {
            return new Response(
                JSON.stringify({ success: false, message: 'Notice not found' }),
                { status: 404 }
            );
        }

        const updatedNotice = await Notice.findByIdAndUpdate(
            noticeId,
            { title, description, date },
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
