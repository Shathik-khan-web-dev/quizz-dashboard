import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../Pages/Sidebar";

const QuizLayout = () => {
  return (
    <div className="Quiz_Layout">
      <div className="Quiz_Sidebar">
        <Sidebar />
      </div>
      <div className="Quiz_Content p-3">
        <Outlet />
      </div>
    </div>
  );
};

export default QuizLayout;
