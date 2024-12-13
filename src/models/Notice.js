
import mongoose from 'mongoose';

const NoticeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String },
    date: { type: Date, required: true },
    fileLink: { type: String },
},
// Explicit collection name
{ collection: 'notices',
    timestamps: true
} 
);

export default mongoose.models.Notice || mongoose.model('Notice', NoticeSchema);
