import { CategoryModel } from "../Model/CategoryModel.js";

export const getAllCategory = async (req, res) => {
    try {
        const categories = await CategoryModel.find({});
        res.json(categories);
    } catch (error) {
        res.json({ message: error.message });
    }
}

export const getCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await CategoryModel.findById(id);
        res.json(category);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const createCategory = async (req, res) => {
    try {
        const { name } = req.body;
        const newCategory = new CategoryModel({ name });
        await newCategory.save();
        res.json(newCategory);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const updateCategory = async (req, res) => {
    try {
        const { id } = req.params
        const { name } = req.body;
        const category = await CategoryModel.findByIdAndUpdate(id, { name });
        res.json("Update Category");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

export const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params
        const category = await CategoryModel.findByIdAndDelete(id);
        res.json("Delete Category");
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}