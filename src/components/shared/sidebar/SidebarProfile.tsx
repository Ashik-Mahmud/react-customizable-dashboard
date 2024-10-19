import { BsThreeDots } from "react-icons/bs";
import { CiLogout } from "react-icons/ci";
import { RiAccountCircleLine } from "react-icons/ri";

type Props = {
  isCollapse: boolean;
};

const SidebarProfile = ({ isCollapse }: Props) => {
  return (
    <div
      className={`${
        isCollapse ? "justify-between" : "justify-center"
      } bg-gray-100 py-3 px-[20px] flex items-center mt-10`}
    >
      <div className="flex items-center gap-[10px]">
        <img
          src="https://img.freepik.com/free-photo/indoor-picture-cheerful-handsome-young-man-having-folded-hands-looking-directly-smiling-sincerely-wearing-casual-clothes_176532-10257.jpg?t=st=1724478146~exp=1724481746~hmac=7de91a5b9271ecb4309974122ae6f47d71c01f7fff840c69755f781a03d9e340&w=996"
          alt="avatar"
          className="w-[30px] h-[30px] cursor-pointer rounded-full object-cover"
        />
        <h3
          className={`${
            isCollapse ? "inline" : "hidden"
          } text-[0.9rem] text-gray-800 font-[500]`}
        >
          Jhon Deo
        </h3>
      </div>

      <div className={`${isCollapse ? "inline" : "hidden"} relative group`}>
        <BsThreeDots className="text-[1.2rem] text-gray-500 cursor-pointer" />

        <ul className="translate-y-[20px] opacity-0 z-[-1] group-hover:translate-y-0 group-hover:opacity-100 group-hover:z-30 absolute bottom-1 left-[30px] bg-white boxShadow transition-all duration-300 p-[8px] rounded-md flex flex-col gap-[3px]">
          <li className="flex items-center gap-[7px] text-[0.9rem] text-gray-600 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">
            <RiAccountCircleLine />
            Profile
          </li>
          <li className="flex items-center gap-[7px] text-[0.9rem] text-red-500 hover:bg-gray-50 px-[8px] py-[4px] rounded-md cursor-pointer">
            <CiLogout />
            Logout
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SidebarProfile;
