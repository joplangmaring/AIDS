import Notice from "@/models/Notice";
import connectMongo from "@/lib/mongodb";
import fs from 'fs'
import path from "path";

export const DELETE = async (req, _) => {
    console.log('Connecting DB');
    
    await connectMongo();

    console.log('DB Connected');
    try {

        const url = new URL(req.url)
        // const noticeId = await Notice.findByIdAndDelete(req.params.id);
        const noticeId = url.searchParams.get('id')
         
        if (!noticeId) {
            return new Response(
              JSON.stringify({ success: false, error: 'Notice ID not found' }),
              { status: 404 }
            );
        }

        const notice = await Notice.findById(noticeId);
        if(!notice){
            return new Response(
              JSON.stringify({ success: false, error: 'Notice not found' }),
              { status: 404 }
            );
        }

        // deleting the file associated with the notice
        const filePath = path.join(process.cwd(), 'public', notice.fileLink);
        if(fs.existsSync(filePath)){
            fs.unlinkSync(filePath)
        }

        await Notice.findByIdAndDelete(noticeId)

        console.log('Deleted notice',notice);
        

        return new Response(JSON.stringify({ success: true, data: notice, message: "Notice deleted successfully" }), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ success: false, message: "Server Error in deleting notice"}),{status: 500})
    }
}