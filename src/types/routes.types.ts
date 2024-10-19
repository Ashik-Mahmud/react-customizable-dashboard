import { IconType } from "react-icons";


export type TChildrenRouteItem = {
    name: string;
    icon?: IconType;
    path: string;
}
// Define the types for the route structure
export interface ISidebarRoute {
    name: string;
    icon: IconType; // Assuming the icon is a React component
    path: string; // path is optional for child routes
    children?: TChildrenRouteItem[];
}


export interface ISidebarRouteWithChildren {
    name: string;
    icon: IconType;
    children: TChildrenRouteItem[];
    path?: undefined;
}

export type TRoutes = (ISidebarRoute | ISidebarRouteWithChildren)

export interface ISidebarItem {
    title: string;
    routes: TRoutes[];
}

