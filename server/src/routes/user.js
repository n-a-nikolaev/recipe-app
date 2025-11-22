import express from "express";
import { protect } from "../middleware/auth.js";
import {
    getUsers,
    getUserById,
    getAllRecipesByUser,
    getRecipeByUser
} from "../controllers/user.js";

const router = express.Router();

router.get("/", protect, getUsers);
router.get("/:id", protect, getUserById);
router.get("/:id/recipes", protect, getAllRecipesByUser);
router.get("/:id/recipes/:recipeId", protect, getRecipeByUser);

export default router;
