import { BsPeople } from "react-icons/bs";
import {
  IoNewspaperOutline,
  IoNotificationsOutline,
  IoSettingsOutline,
} from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";
import CreateAdminUsers from "../../../pages/dashboard/admin/create-admin";
import CreateFacultyUser from "../../../pages/dashboard/admin/create-faculty";
import CreateStudentsUser from "../../../pages/dashboard/admin/create-students";
import AddBlogsPage from "../../../pages/dashboard/Blogs/add-blog";
import BlogListPage from "../../../pages/dashboard/Blogs/blog-list";
import DashboardOverview from "../../../pages/dashboard/overview/overview";
import NotificationPage from "../../../pages/dashboard/settings/Notification";
import SettingsPage from "../../../pages/dashboard/settings/Settings";
import { ISidebarItem } from "../../../types/routes.types";

export const SIDEBAR_ROUTES: ISidebarItem[] = [
  {
    title: "Main",
    routes: [
      {
        name: "Dashboard",
        icon: RxDashboard,
        path: "overview",
        element: <DashboardOverview />,
      },

      {
        name: "Posts",
        icon: IoNewspaperOutline,
        children: [
          { name: "Add Post", path: "blog/add", element: <AddBlogsPage /> },
          { name: "All posts", path: "blogs", element: <BlogListPage /> },
        ],
      },
    ],
  },
  {
    title: "Admin",
    routes: [
      {
        name: "User management",
        icon: BsPeople,
        children: [
          {
            name: "Create Admin",
            path: "admin/create",
            element: <CreateAdminUsers />,
          },
          {
            name: "Create Faculty",
            path: "faculty/create",
            element: <CreateFacultyUser />,
          },
          {
            name: "Create Student",
            path: "student/create",
            element: <CreateStudentsUser />,
          },
        ],
      },
    ],
  },

  {
    title: "Settings",
    routes: [
      {
        name: "Settings",
        icon: IoSettingsOutline,
        path: "settings",
        element: <SettingsPage />,
      },
      {
        name: "Notification",
        icon: IoNotificationsOutline,
        path: "notification",
        element: <NotificationPage />,
      },
    ],
  },
];
