import express from 'express'
import { verify } from '../Middleware/AuthMiddleware.js'
import { createCategory, deleteCategory, getAllCategory, getCategory, updateCategory } from '../Controller/CategoryController.js'

export const categoryRouter = express.Router()

categoryRouter.get('/', getAllCategory)
    .get('/:id', getCategory)
    .post('/', verify(["admin"]), createCategory)
    .put('/:id', verify(["admin"]), updateCategory)
    .delete('/:id', verify(["admin"]), deleteCategory)

