import express from 'express'
import mongoose, { Schema } from 'mongoose';
import cors from 'cors'
import 'dotenv/config'
import { userRouter } from './src/Routes/UserRoutes.js';
import { authRoute } from './src/Routes/AuthRoutes.js';
import { postRouter } from './src/Routes/PostRoutes.js';
import { PostModel } from './src/Model/PostModel.js';
import { UsersModel } from './src/Model/UserModel.js';
import { categoryRouter } from './src/Routes/CategoryRoutes.js';
const app = express()
app.use(cors())
app.use(express.json())

app.use("/assets", express.static('./public/image'))
app.use("/users", userRouter)
app.use("/posts", postRouter)
app.use("/category", categoryRouter)
app.use("/", authRoute)


app.get('/postBycategory/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await PostModel.find({ CategoryModel: id });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get('/postWithcategory', async (req, res) => {
    try {
        const posts = await PostModel.find().populate("category")
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get('/postByauthor/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await PostModel.find({ author: id });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.delete('/postByauthor/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await PostModel.findByIdAndDelete({ _id: id });
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get('/postWithauthorAndcategory/:id', async (req, res) => {
    try {
        const { id } = req.params;
        const posts = await PostModel.find({ author: id }).populate("author").populate("category")
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

app.get('/postWithauthorAndcategory', async (req, res) => {
    try {
        const posts = await PostModel.find().populate("author").populate("category")
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})
//get id by post(detail page)
app.get('/postdetailauthorAndcategory/:id', async (req, res) => {
    try {
        const { id } = req.params
        const posts = await PostModel.findById(id).populate("author").populate("category")
        res.json(posts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})

mongoose.connect(process.env.KEY)
    .then(() => console.log('Connected!'))
    .catch(() => console.log('Not Connected!'))

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`)
})