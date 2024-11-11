import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";
import Root from "./components/Root.jsx";
import { router } from "./route/Routes.jsx";
import AuthProvider from "./context api/AuthProvider.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router}>
        <Root />
      </RouterProvider>
    </AuthProvider>
  </StrictMode>
);
