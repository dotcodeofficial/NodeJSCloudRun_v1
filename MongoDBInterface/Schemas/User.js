import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    objVersion: {
        type: Number,
        default: 0,
        immutable: true
    },
    username: {
        type: String,
        required: true,
        unique: true,
    },
    email: {
        type:String,
        required: true,
        unique: true,
        lowercase: true,
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

export default mongoose.model('User', userSchema);