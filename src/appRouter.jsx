import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import { Dashboard } from "./modules/Dashboard";
import { User } from "./modules/User";

export const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Dashboard />,
      },
      {
        path: "user",
        element: <User />,
      },
    ],
  },
]);
