import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.tsx";
import BlogDetail from "./BlogDetail.tsx";
import "./index.css";
import { BlogProvider } from "./BlogContext.tsx";
import Login from "./Login.tsx";
import Signup from "./Signup.tsx";
import About from "./About.tsx";
import { AuthProvider } from "./AuthContext.tsx";
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/blog/:id", element: <BlogDetail /> },
  { path: "/login", element: <Login /> },
  { path: "/signup", element: <Signup /> },
  { path: "/about", element: <About /> },
]);
createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BlogProvider>
      <AuthProvider>
        <Toaster position="top-center" reverseOrder={false} />
        <RouterProvider router={router} />
      </AuthProvider>
    </BlogProvider>
  </StrictMode>
);
