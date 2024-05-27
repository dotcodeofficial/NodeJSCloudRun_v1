import mongoose from "mongoose";

const imageSchema = new mongoose.Schema({
    objVersion: {
        type: Number,
        default: 0,
        immutable: true
    },
    url: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
        immutable: true    
    },
    updatedAt: {
        type: Date,
        default: Date.now
    },
    
});

export default mongoose.model('Image', imageSchema);