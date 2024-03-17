import mongoose, { Schema } from "mongoose";

const categorySchema = new Schema({
    name: String,
});
export const CategoryModel = mongoose.model("categories", categorySchema);