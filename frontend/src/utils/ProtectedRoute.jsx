import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

export default function ProtectedRoute({ children }) {
  const { user, token, loading } = useAuth();

  if (!loading && (!user || !token)) {
    return <Navigate to="/auth" replace />;
  }

  return children;
}
