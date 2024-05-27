import mongoose from 'mongoose';
import { head } from 'request';

const petBodySchema = new mongoose.Schema({
    objVersion: {
        type: Number,
        value: 0,
        immutable: true
    },
    head: String,
    torso: String,
    legs: String,
    tail: String,
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