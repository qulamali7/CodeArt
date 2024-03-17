import { PostModel } from "../Model/PostModel.js"

export const getAllPost = async (req, res) => {
    try {
        const post = await PostModel.find({})
        res.send(post)
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}

export const getPost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await PostModel.findById(id)
        res.send(post)
    } catch (error) {
        return res.send({ error: error.message });
    }
}

export const createPost = async (req, res) => {
    try {
        const { title, description, category, author } = req.body;
        const newPost = new PostModel({ image: "http://localhost:3200/assets/" + req.upload, title, description, category, author })
        await newPost.save()
        res.send(newPost)
    } catch (error) {
        return res.send({ error: error.message });
    }
}

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params
        const {title, description, category, author } = req.body;
        const post = await PostModel.findByIdAndUpdate(id, { image: "http://localhost:3200/assets/" + req.upload, title, description, category, author })
        res.send("Got a PUT request");
    } catch (error) {
        return res.send({ error: error.message });
    }
}

export const deletePost = async (req, res) => {
    try {
        const { id } = req.params
        const post = await PostModel.findByIdAndDelete(id)
        res.send("Got a DELETE request");
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}