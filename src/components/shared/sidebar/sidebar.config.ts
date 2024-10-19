import { IoNewspaperOutline, IoNotificationsOutline, IoSettingsOutline } from "react-icons/io5";
import { RxDashboard } from "react-icons/rx";

export const SIDEBAR_ROUTES = [
    {
        title: 'Main',
        routes: [
            { name: "Dashboard", icon: RxDashboard, path: "overview" },

            {
                name: "Posts", icon: IoNewspaperOutline, children: [
                    { name: "Add Post", path: "blog/add" },
                    { name: "All posts", path: "blogs" },
                ]
            },
        ]
    },
    {
        title: 'Settings',
        routes: [
            { name: "Settings", icon: IoSettingsOutline, path: "settings" },
            { name: "Notification", icon: IoNotificationsOutline, path: "notification" },
        ]
    }
]