import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import AuthLayout from "@/layouts/AuthLayout/AuthLayout";
import RequireRole from "@/components/RequireRole/RequireRole";
import HomePage from "@/pages/home/HomePage";
import LoginPage from "@/pages/login/LoginPage";
import ProfilePage from "@/pages/profile/ProfilePage";
import RegisterPage from "@/pages/register/RegisterPage";
import AdminPage from "@/pages/admin/AdminPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        element: <RequireRole />,
        children: [{ path: "profile", element: <ProfilePage /> }],
      },
      {
        element: <RequireRole roles={["admin"]} />,
        children: [{ path: "admin", element: <AdminPage /> }],
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="login" replace /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);
