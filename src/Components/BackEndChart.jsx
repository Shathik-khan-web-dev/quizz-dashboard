import React from "react";
import { BackEndData } from "../Data/Index";
import Lessons from "./Lessons";

const BackEndChart = () => {
  return (
    <section>
      <p className="fw-bold py-1">Back-End Chart</p>

      {/* Backend Chart */}
      <div className="flex flex-col gap-4">
        {BackEndData.map((lesson) => (
          <Lessons key={lesson.url} data={lesson} />
        ))}
      </div>
    </section>
  );
};

export default BackEndChart;
