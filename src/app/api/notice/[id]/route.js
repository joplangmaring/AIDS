import connectMongo from '@/lib/mongodb';
import Notice from '@/models/Notice';

export async function GET(req, { params }) {
  const { id } = params;

  try {
    await connectMongo();

    const notice = await Notice.findById(id);
    if (!notice) {
      return new Response(JSON.stringify({ error: 'Notice not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ success: true, notice }), { status: 200 });
  } catch (error) {
    console.error(error);
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
