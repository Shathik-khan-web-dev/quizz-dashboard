import React from "react";
import { NavLink } from "react-router-dom";
import { sidebarNavItems } from "../Components/Constant";
import Logo from "../Assets/Logo.png";

const Sidebar = () => {
  return (
    <aside className="nav_aside">
      <div className="d-flex gap-2 flex-nowrap justify-content-center align-items-center p-3 ">
        <img src={Logo} alt="Logo" className="logo" width={30} height={30} />
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
            className="d-flex sidebar_btn p-1 py-2 px-3 mb-2">
            {item.icon}
            <span className="sidebar_text">{item.title}</span>
          </NavLink>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
