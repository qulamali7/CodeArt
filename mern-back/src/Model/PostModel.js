import mongoose, { Schema } from "mongoose";

const postSchema = new Schema({
    image: {
        type: String
    },
    title: {
        type: String,
        unique: true,
        required: true
    },
    description: { 
        type: String,
        required: true
    },
    author: { type: Schema.Types.ObjectId, ref: 'users' },
    category: { type: Schema.Types.ObjectId, ref: 'categories' },
}, { timestamps: true });

export const PostModel = mongoose.model('posts', postSchema);