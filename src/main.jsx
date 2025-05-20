import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { appRouter } from "./appRouter";
import "./index.css";
import { ToastProvider } from "./provider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastProvider>
      <RouterProvider router={appRouter} />
    </ToastProvider>
  </StrictMode>
);
