import Notice from "@/models/Notice";
import connectMongo from "@/lib/mongodb";

export const DELETE = async (req, res) => {
    try {
        
        await connectMongo();

        const notice = await Notice.findByIdAndDelete(req.params.id);
         
        if (!notice) {
            return new Response(
              JSON.stringify({ success: false, error: 'Notice not found' }),
              { status: 404 }
            );
        }

        return new Response(JSON.stringify({ success: true, data: notice }), { status: 200 });

    } catch (error) {
        console.log(error);
        return new Response(JSON.stringify({ success: false, message: "Server Error in deleting notice"}),{status: 500})
    }
}