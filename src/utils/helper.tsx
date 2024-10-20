import { SIDEBAR_ROUTES } from "../components/shared/sidebar/sidebar.config";

export const getDashboardPaths = () => {
  const routes = SIDEBAR_ROUTES;

  const modifiedRoutes = routes?.map((parentRoutes) => {
    let flatArray: { path: string; element: React.ReactNode }[] = [];
    parentRoutes.routes.forEach((route) => {
      if (!route.children?.length) {
        flatArray.push({
          path: route.path as string,
          element: route.element,
        });
      } else {
        route.children?.forEach((child) => {
          flatArray.push({ path: child.path, element: child.element });
        });
      }
    });
    return flatArray;
  });

  return modifiedRoutes.flat(Infinity);
};
