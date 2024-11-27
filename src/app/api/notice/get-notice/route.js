import connectMongo from "@/lib/mongodb";
import Notice from "@/models/Notice";

export async function GET(req) {
  console.log('Connecting to MongoDB...');
  await connectMongo();
  console.log('MongoDB connected');

  try {
    // Fetch all notices from the database
    const notices = await Notice.find({}).sort({ updatedAt: -1 }); // Sort by updatedAt in descending order to show latest updates first
    
    // Return success response with all notices
    return new Response(
      JSON.stringify({ success: true, data: notices }),
      { status: 200 }
    );
  } catch (error) {
    console.error('Error Fetching Notices:', error.message);
    
    // Return error response if there is any issue
    return new Response(
      JSON.stringify({ success: false, message: error.message }),
      { status: 400 }
    );
  }
}
