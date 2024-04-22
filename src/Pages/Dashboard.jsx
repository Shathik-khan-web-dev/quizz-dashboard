import React, { useState } from "react";
import { Button } from "react-bootstrap";
import {
  AdditionalChart,
  BackEndChart,
  FrontEndChart,
} from "../Components/Index";

const Dashboard = () => {
  const tabs = ["Front-End", "Back-End", "Additional"];
  const [activeTab, setActiveTab] = useState("Front-End");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const chartComponent = {
    "Front-End": <FrontEndChart />,
    "Back-End": <BackEndChart />,
    Additional: <AdditionalChart />,
  };

  return (
    <section>
      <span className="fw-bold">Dashboard</span>

      {/* Tabs */}
      <div className="mt-3 border-bottom d-flex">
        {tabs.map((tab) => (
          <Button
            key={tab}
            className={`tab_style px-3 ${
              activeTab === tab ? "tab-active-style" : ""
            }`}
            onClick={() => handleTabClick(tab)}>
            {tab}
          </Button>
        ))}
      </div>

      {/* Banner */}
      <div className="bg-danger banner-container-style mt-4 rounded-3">
        <h3 className="p-3 text-white ">Lets's learn {activeTab}!</h3>
        <div className="banner-bg-style bg-clouds" />
      </div>

      {/* Content */}
      <div className="">
        <div>{chartComponent[activeTab]}</div>
      </div>
    </section>
  );
};

export default Dashboard;
