import { HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineLeaderboard } from "react-icons/md";

const sidebarNavItems = [
  {
    title: "Dashboard",
    path: "/dashboard",
    icon: <HiOutlineHome className="sidebar_icon" />,
  },

  {
    title: "Leaderboards",
    path: "/leaderboard",
    icon: <MdOutlineLeaderboard className="sidebar_icon" />,
  },
  {
    title: "Profile",
    path: "/profile",
    icon: <HiOutlineUserCircle className="sidebar_icon" />,
  },
];

export { sidebarNavItems };
