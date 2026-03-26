import fs from 'fs';
import path from 'path';

export async function GET(req, { params }) {
  const { filename } = await params;
  const filePath = path.join(process.cwd(), 'public', 'temp', filename);

  if (!fs.existsSync(filePath)) {
    return new Response('File not found', { status: 404 });
  }

  const file = fs.readFileSync(filePath);
  const ext = path.extname(filename).toLowerCase();

  const mimeTypes = {
    '.pdf': 'application/pdf',
    '.jpg': 'image/jpeg',
    '.jpeg': 'image/jpeg',
    '.png': 'image/png',
    '.doc': 'application/msword',
    '.docx': 'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
  };

  const contentType = mimeTypes[ext] || 'application/octet-stream';

  return new Response(file, {
    headers: {
      'Content-Type': contentType,
      'Content-Disposition': `inline; filename="${filename}"`,
      'Cache-Control': 'no-store',
    },
  });
}
