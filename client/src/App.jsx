import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";
import ProtectedRoute from "./components/routing/auth-route";
import { AddRecipe } from "./pages/recipe";
import "./index.css";

const LoginComponent = lazy(() => import("./pages/login"));
const RegisterComponent = lazy(() => import("./pages/register"));

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route key="home" path="/" element={<Home />} exact={true} />
        <Route key="login" path="/login" element={<LoginComponent />} />
        <Route
          key="register"
          path="/register"
          element={<RegisterComponent />}
        />
        <Route
          key="add-recipe"
          path="/recipe/add"
          element={
            <ProtectedRoute>
              <AddRecipe />
            </ProtectedRoute>
          }
        />
        <Route
          key="edit-recipe"
          path="/recipe/edit/:id"
          element={
            <ProtectedRoute>
              <AddRecipe />
            </ProtectedRoute>
          }
        />
      </Route>
    </Routes>
  );
}
