import { useAuthStore } from "../../../store/auth-store";
import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children }) {
  const isAuth = useAuthStore((s) => s.isAuth);

  return isAuth ? children : <Navigate to="/login" />;
}
