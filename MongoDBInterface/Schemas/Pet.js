import mongoose from "mongoose";

const petSchema = new mongoose.Schema({
    objVersion: {
        type: Number,
        default: 0,
        immutable: true
    },
    name: {
        type: String,
        required: true,
    },
    dob: Date,
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

export default mongoose.model('Pet', petSchema);