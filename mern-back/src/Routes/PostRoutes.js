import express from 'express'
import { storage } from '../Middleware/UploadPhoto.js'
import multer from 'multer'
import { verify } from '../Middleware/AuthMiddleware.js'
import { createPost, deletePost, getAllPost, getPost, updatePost } from '../Controller/PostController.js'


const upload = multer({ storage: storage })

export const postRouter = express.Router()

postRouter.get('/', getAllPost)
    .get('/:id', getPost)
    .post('/', upload.single('image'), createPost)
    .put('/:id', upload.single('image'), updatePost)
    .delete('/:id', deletePost)