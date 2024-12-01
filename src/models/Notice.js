// import mongoose from "mongoose";

// const noticeSchema = new mongoose.Schema(
//     {
//         title: {
//             type: String,
//             required: true
//         },
//         description: {
//             type: String,
//             required: true    
//         },
//         date: {
//             type: String,
//             required: true,
//             // default: Date.now,
//         },
//         fileLink:{
//             type: String,
//             required: true
//         }
//     },
//     { timestamps: true }
// )

// // export default mongoose.model("Notice",noticeSchema)
// export default mongoose.models.Notice || mongoose.model('Notice', noticeSchema);


import mongoose from 'mongoose';

const NoticeSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    description: { type: String, required: true },
    date: { type: Date, required: true },
    fileLink: { type: String, required: true },
},
// Explicit collection name
{ collection: 'notices',
    timestamps: true
} 
);

export default mongoose.models.Notice || mongoose.model('Notice', NoticeSchema);
