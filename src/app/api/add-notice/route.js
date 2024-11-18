import connectMongo from "@/lib/mongodb";
import Notice from "@/models/Notice";

export const POST = async(req, res) => {
    try {
        await connectMongo();

        const { title , description , date , fileLink } = req.body;
        
        const fileDestination = `/temp/${fileLink.filename}`;

        console.log(title , description , date );
        console.log(fileDestination);
        
        const notice = new Notice({
            title, description, date, fileLink: fileDestination
        })

        await notice.save();

        return new Response(JSON.stringify({ success: true, data: notice, message: 'Notice Uploaded Successfully' }), { status: 201 } ) 

    } catch (error) {
        return new Response(JSON.stringify({ success: false, error: 'Server Error in uploading notice' }), {status: 500})
    }
}


