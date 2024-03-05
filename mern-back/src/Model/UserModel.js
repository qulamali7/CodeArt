import mongoose, { Schema } from "mongoose";

const userSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    role: {
        type: String,
        default: 'user'
    },
}, { timestamps: true });

export const UsersModel = mongoose.model('users', userSchema);