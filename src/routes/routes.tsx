import { createBrowserRouter } from "react-router-dom";

import App from "../App";
import AppLayout from "../components/layouts/AppLayout";
import DashboardLayout from "../components/layouts/DashboardLayout";
import SignInPage from "../pages/auth/sign-in";
import SignUpPage from "../pages/auth/sign-up";
import { TReactRouterItem } from "../types/routes.types";
import { getDashboardPaths } from "../utils/helper";
import ProtectedRoutes from "./ProtectedRoutes";

const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/sign-in",
        element: <SignInPage />,
      },
      {
        path: "/sign-up",
        element: <SignUpPage />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoutes>
        <DashboardLayout />
      </ProtectedRoutes>
    ),

    children: getDashboardPaths() as TReactRouterItem[],
  },
]);

export default router;
