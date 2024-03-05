import { UsersModel } from "../Model/UserModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
export const getAllUsers = async (req, res) => {
    try {
        const users = await UsersModel.find({});
        res.send(users)
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}

export const getUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UsersModel.findById(id);
        res.send(user)
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}

export const createUser = async (req, res) => {
    try {
        const { name, email, password, role } = req.body
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const newUser = new UsersModel({ name, email, password: hash, role })
        await newUser.save()
        res.status(200).json('Got a POST request!')
    } catch (error) {
        return res.send(console.log(error));
    }
}

export const updateUsers = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, password, role } = req.body
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const user = await UsersModel.findByIdAndUpdate(id, { name, email, password: hash, role });
        const token = jwt.sign({ role: user.role, email: user.newEmail, _id: user._id, name }, process.env.JWT_KEY)
        res.status(200).send(token)
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}

export const editUsers = async (req, res) => {
    try {
        const { id } = req.params
        const { name, email, password } = req.body
        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)
        const user = await UsersModel.findByIdAndUpdate(id, { name, email, password: hash });
        // const token = jwt.sign({ role: user.role, email: user.newEmail, _id: user._id, name }, process.env.JWT_KEY)
        res.status(200).send(user)
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}

export const deleteUser = async (req, res) => {
    try {
        const { id } = req.params
        const user = await UsersModel.findByIdAndDelete(id);
        res.send("Got a DELETE request");
    } catch (error) {
        return res.status(401).send({ error: error.message });
    }
}