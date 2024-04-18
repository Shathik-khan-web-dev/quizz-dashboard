import React from "react";
import { AdditionalData } from "../Data/Index";
import Lessons from "./Lessons";

const AdditionalChart = () => {
  return (
    <section>
      <p className="fw-bold py-1">Additional Chart</p>

      {/* FrontEnd Chart */}
      <div className="flex flex-col gap-4">
        {AdditionalData.map((lesson) => (
          <Lessons key={lesson.url} data={lesson} />
        ))}
      </div>
    </section>
  );
};

export default AdditionalChart;
