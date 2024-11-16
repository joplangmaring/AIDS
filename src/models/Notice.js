import mongoose from "mongoose";

const noticeSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true
        },
        
        description: {
            type: String,
            required: true    
        },
        date: {
            type: Date,
            required: true,
            default: Date.now,
        },
        fileLink:{
            type: String,
            required: true
        }
    },
    { timestamps: true }
)

export default mongoose.model("Notice",noticeSchema)