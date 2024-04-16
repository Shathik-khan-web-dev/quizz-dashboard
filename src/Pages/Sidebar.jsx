import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarNavItems } from "../Constant/constant";
import Logo from "../Images/Logo.png";

const Sidebar = () => {
  return (
    <aside className="nav_aside">
      <div className="d-flex gap-2 align-i flex-nowrap justify-content-center align-items-center p-3">
        <img src={Logo} alt="Logo" className="" width={30} height={30} />
        <span className="fw-bold text-decoration-none fs-5 logo_text">
          <span className="text-danger">A</span>bility
        </span>
        <span className="fw-bold text-decoration-none fs-5 logo_text">
          <span className="text-danger">C</span>heck
        </span>
      </div>

      <nav className="w-100 mt-4 d-flex flex-column sidebar_nav">
        {sidebarNavItems.map((item) => (
          <NavLink
            key={item.title}
            to={item.path}
            className="d-flex sidebar_btn  p-2">
            {item.icon}
            <span className="sidebar_text fs-6">{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
