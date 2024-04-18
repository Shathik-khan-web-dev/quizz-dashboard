import React from "react";
import { FrontEndData } from "../Data/Index";
import Lessons from "./Lessons";

const FrontEndChart = () => {
  return (
    <section>
      <p className="fw-bold py-1">Front-End Chart</p>

      {/* FrontEnd Chart */}
      <div className="gap-4">
        {FrontEndData.map((lesson) => (
          <Lessons key={lesson.url} data={lesson} />
        ))}
      </div>
    </section>
  );
};

export default FrontEndChart;
