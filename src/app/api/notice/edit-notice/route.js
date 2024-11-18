import Notice from "@/models/Notice";
import connectMongo from "@/lib/mongodb";
import fs from "fs"


export const PUT = async (req, res) => {
  try {
    await connectMongo();

    const form = await new Promise((resolve, reject) => {
      upload.single("file")(req, {}, (err) => {
        if (err) return reject(err);
        resolve(req);
      });
    });

    const { id, title, description, date } = form.body;

    if (!id) {
      return res.status(404).json({ message: "Notice ID is required" });
    }

    // Find the notice by ID
    const notice = await Notice.findById(id);

    if (!notice) {
      return res.status(404).json({ message: "Notice Not Found" });
    }

    // Update fields
    notice.title = title || notice.title;
    notice.description = description || notice.description;
    notice.date = date || notice.date;

    // Handle file update if a new file is provided
    if (form.file) {
      const oldFilePath = path.join(process.cwd(), "temp", notice.fileLink);

      // Delete old file if it exists
      if (fs.existsSync(oldFilePath)) {
        fs.unlinkSync(oldFilePath);
      }

      // Save new file path in the database
      notice.fileLink = form.file.filename;
    }

    // Save updated notice
    const updatedNotice = await notice.save();

    return new Response(
      JSON.stringify({
        success: true,
        data: updatedNotice,
        message: "Notice updated successfully",
      }),
      { status: 200 }
    );
  } catch (error) {
    console.log(error);
    return new Response(
      JSON.stringify({
        success: false,
        message: "Server error in updating a notice",
      }),
      { status: 500 }
    );
  }
};