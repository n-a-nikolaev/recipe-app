import { create } from "zustand";

export const useRecipeStore = create((set) => ({
  recipes: [],
  loading: false,
  error: null,

  setRecipes: (recipes) => set({ recipes }),

  addRecipe: (recipe) =>
    set((state) => ({
      recipes: [...state.recipes, recipe],
    })),

  updateRecipe: (updatedRecipe) =>
    set((state) => ({
      recipes: state.recipes.map((r) =>
        r._id === updatedRecipe._id ? updatedRecipe : r
      ),
    })),

  deleteRecipe: (id) =>
    set((state) => ({
      recipes: state.recipes.filter((r) => r._id !== id),
    })),
}));
