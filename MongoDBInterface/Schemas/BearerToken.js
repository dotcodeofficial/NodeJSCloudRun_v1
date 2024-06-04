import mongoose from "mongoose";

const bearerTokenSchema = new mongoose.Schema({
    token: {
        type: String,
        required: true,
    },
    expires: {
        type: Number,
        default: (Date.now() + (12*60*60*1000)), //12 hours
        immutable: true    
    }
});

export default mongoose.model('BearerToken', bearerTokenSchema); 