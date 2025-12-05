import { create } from "zustand";
import { persist, devtools } from "zustand/middleware";

export const useAuthStore = create(
  devtools(
    persist(
      (set) => ({
        user: null,
        token: null,
        isAuthenticated: false,

        login: (userData, token) =>
          set({ user: userData, token, isAuthenticated: true }),

        logout: () => set({ user: null, token: null, isAuthenticated: false }),
      }),
      {
        name: "auth-storage", // key in localStorage
      }
    )
  )
);
