import express from "express"
import { loginUser, registerUser } from "../Controller/AuthController.js"
export const authRoute = express.Router()


authRoute.post('/login', loginUser)
authRoute.post('/register', registerUser)