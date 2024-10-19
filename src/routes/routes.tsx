import { createBrowserRouter } from "react-router-dom";

import AppLayout from "../layouts/AppLayout";
import DashboardLayout from "../layouts/DashboardLayout";
import SignInPage from "../pages/auth/sign-in";
import SignUpPage from "../pages/auth/sign-up";
import AddBlogsPage from "../pages/dashboard/Blogs/add-blog";
import BlogListPage from "../pages/dashboard/Blogs/blog-list";
import DashboardOverview from "../pages/dashboard/overview/overview";
import NotificationPage from "../pages/dashboard/settings/Notification";
import SettingsPage from "../pages/dashboard/settings/Settings";

const router = createBrowserRouter([
  {
    path: "",
    element: <AppLayout />,
    children: [
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
    element: <DashboardLayout />,
    children: [
      {
        index: true,
        element: <DashboardOverview />,
      },
      {
        path: "overview",
        element: <DashboardOverview />,
      },

      {
        path: "blogs",
        element: <BlogListPage />,
      },
      {
        path: "blog/add",
        element: <AddBlogsPage />,
      },
      {
        path: "settings",
        element: <SettingsPage />,
      },
      {
        path: "notification",
        element: <NotificationPage />,
      },
    ],
  },
]);

export default router;
