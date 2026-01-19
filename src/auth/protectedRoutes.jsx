import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute() {
  const token = localStorage.getItem("token");

  //  No está logueado
  if (!token) {
    return <Navigate to="/login" replace />;
  }
  //  Está logueado
  return <Outlet />;
}