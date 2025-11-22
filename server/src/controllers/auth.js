// src/controllers/authController.js
import User from "../models/User.js";
import { generateToken } from "../utils/generateToken.js";

export const registerUser = async (req, res, next) => {
    try {
        console.log(req.body);
        const { username, email, password } = req.body;

        const userExists = await User.findOne({ email });
        if (userExists) return res.status(400).json({ message: "User already exists" });

        const user = await User.create({ username, email, password });

        generateToken(res, user._id, user.role);

        res.status(201).json({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        });
    } catch (error) {
        next(error);
    }
};

export const loginUser = async (req, res, next) => {
    try {
        console.log(req.body);
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if (!user || !(await user.matchPassword(password))) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        generateToken(res, user._id, user.role);

        res.json({
            _id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        });
    } catch (error) {
        next(error);
    }
};

export const logoutUser = async (req, res, next) => {
    try {
        res.cookie("token", "", { httpOnly: true, expires: new Date(0) });
        res.json({ message: "Logged out successfully" });
    } catch (error) {
        next(error);
    }
};
