import express from "express";
import { protect } from "../middleware/auth.js";
import { authorizeRoles } from "../middleware/role.js";
import {
    getRecipes,
    getRecipeById,
    createRecipe,
    updateRecipe,
    deleteRecipe
} from "../controllers/recipe.js";

const router = express.Router();

// Public route
router.get("/", getRecipes);

// Public route
router.get("/:id", getRecipeById);

// Logged-in users only
router.post("/", protect, createRecipe);

// Only moderators can update/delete
router.put("/:id", protect, authorizeRoles("moderator"), updateRecipe);
router.delete("/:id", protect, authorizeRoles("moderator"), deleteRecipe);

export default router;
