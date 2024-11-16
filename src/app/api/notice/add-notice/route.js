import Notice from "@/models/Notice";
import connectMongo from "@/lib/mongodb";

export const POST = async(req, res) => {
    try {
        await connectMongo();

        const { title, description, date } = req.body;
        const fileLink = `/temp/${req.file.filename}`;

        const notice = new Notice({
            title, description, date, fileLink
        })

        await notice.save();

        return new Response(JSON.stringify({ success: true, data: notice, message: 'Notice Uploaded Successfully' }), { status: 201 } ) 

    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: 'Server Error in uploading notice' }), {status: 500})
    }
}


