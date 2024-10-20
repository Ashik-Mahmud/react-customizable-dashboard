import { useState } from "react";

// react icons
import { BsThreeDotsVertical } from "react-icons/bs";

import { IoIosCode } from "react-icons/io";
import cn from "../../../utils/cn";
import TextLogo from "../../ui/TextLogo";
import SidebarItem from "./SidebarItem";
import SidebarProfile from "./SidebarProfile";
import { SIDEBAR_ROUTES } from "./sidebar.config";

const ResponsiveSidebar = () => {
  const [isCollapse, setIsCollapse] = useState(true);
  const [routes] = useState(SIDEBAR_ROUTES);

  return (
    <aside
      className={`bg-white shadow  rounded-md transition-all duration-300 ease sticky h-dvh top-0 ${
        !isCollapse ? "col-span-1 w-[60%]" : "col-span-2 mr-10"
      }  flex flex-col justify-between`}
    >
      <div>
        {/* Logo */}
        <div
          className={cn(
            "transition-all duration-300 ease-in-out mt-5",
            isCollapse ? "px-[20px]" : "px-[10px]"
          )}
        >
          {isCollapse ? (
            <div className="flex items-center justify-between">
              <TextLogo />
              <div className="relative group">
                <BsThreeDotsVertical className="text-[1.9rem] text-gray-500 cursor-pointer p-[5px] rounded-md hover:bg-gray-50" />
              </div>
            </div>
          ) : (
            <TextLogo firstName="  " coloredName="Vat" />
          )}
        </div>

        {/* collapse button */}
        <div
          className="bg-white shadow-lg p-[5px] rounded-md w-max absolute top-[50px] right-[-20px] cursor-pointer"
          onClick={() => setIsCollapse(!isCollapse)}
        >
          <IoIosCode className="text-[1.5rem] text-gray-500" />
        </div>

        {/* general section */}
        <div
          className={cn(
            "h-[80dvh]  nice-scroll",
            isCollapse ? "overflow-y-auto" : ""
          )}
        >
          {routes?.map((item, index: number) => (
            <SidebarItem
              isCollapse={isCollapse}
              item={item}
              key={item?.title + "_" + index}
            />
          ))}
        </div>
      </div>

      {/* Profile */}
      <SidebarProfile isCollapse={isCollapse} />
    </aside>
  );
};

export default ResponsiveSidebar;
