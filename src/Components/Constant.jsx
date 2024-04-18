import { HiOutlineHome, HiOutlineUserCircle } from "react-icons/hi";
import { MdOutlineLeaderboard } from "react-icons/md";
import { FaGithub } from "react-icons/fa";

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

const socialLinks = [
  {
    title: "Github",
    url: "https://github.com/abilitycoding",
    icon: <FaGithub className="social-link" />,
  },
];

const charBannerText = {
  Hiragana: "Master Coding with the basics",
  Katakana: "Practice essential for developer",
  Kanji: "Take your mastery to the next level",
};

export { sidebarNavItems, socialLinks, charBannerText };
