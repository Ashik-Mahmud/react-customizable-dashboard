import { Outlet } from "react-router-dom";
import ResponsiveSidebar from "../components/shared/sidebar/Sidebar";

type Props = {};

const DashboardLayout = (props: Props) => {
  return (
    <div className="grid grid-cols-12 ">
      <ResponsiveSidebar />

      <div className="dashboard-content col-span-10 py-10">
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
