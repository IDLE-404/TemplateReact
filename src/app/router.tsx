import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layouts/MainLayout/MainLayout";
import HomePage from "@/pages/home/HomePage";
import LoginPage from "@/pages/login/LoginPage";
import ProfilePage from "@/pages/profile/ProfilePage";
import RegisterPage from "@/pages/register/RegisterPage";
import AuthLayout from "@/layouts/authLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "profile", element: <ProfilePage /> },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
    ],
  },
]);
