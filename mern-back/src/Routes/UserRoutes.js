import express from 'express'
import { createUser, deleteUser, editUsers, getAllUsers, getUser, updateUsers } from '../Controller/UserController.js'
import { verify } from '../Middleware/AuthMiddleware.js'

export const userRouter = express.Router()

userRouter.get('/', getAllUsers)
    .get('/:id', getUser)
    .post('/', createUser)
    .put('/:id', updateUsers)
    .put('/editProfile/:id', editUsers)
    .delete('/:id', deleteUser)

