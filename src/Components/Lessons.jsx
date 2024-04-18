import React, { useState } from "react";

const Lessons = ({ data }) => {
  const [displayTable, setDisplayTable] = useState(false);
  const boxStyle = {
    backgroundColor: data.backgroundColor,
  };

  return (
    <>
      <section style={boxStyle} className="rounded-3 p-2 px-3 text-white mb-3">
        <p className="mb-2 chart_title pt-1 fw-bold">
          Lesson {data.lessonNumber}
        </p>

        <div className="d-flex justify-content-between chart_box">
          <div>
            <h3 className="fw-bold ">{data.title}</h3>
            <p className="chart_title fw-bold">{data.lessonPages}</p>
          </div>

          <div className="mt-4 d-flex gap-3 align-items-center chart_btn">
            {/* Start Quiz Button */}
            <button
              className="px-3 py-1 rounded-3
               bg-white border-white fw-bold btn_one">
              Start Quiz
            </button>

            {/* Display Table Button */}
            <button
              className="px-3 py-1 rounded-3 
               border-white  fw-bold btn_two"
              onClick={() => setDisplayTable(!displayTable)}>
              {displayTable ? "Hide Table" : "Show Table"}
            </button>
          </div>
        </div>

        {/* Lesson Content */}
        {displayTable && (
          <table className="quiz_table ">
            <thead className=" text-black quiz_table_head">
              <tr className="">
                <th className="p-1 px-3 ">#</th>
                <th className="p-1 px-3 ">Topic</th>
              </tr>
            </thead>
            <tbody className="quiz_table_body">
              {data.table.map((table, index) => (
                <tr key={`id-${table.meanings}`}>
                  <td className="border border-1 table_index text-center">{index + 1}</td>
                  <td className="border border-1 ">
                    <div className="">
                      {table.topic &&
                        table.topic.split(",").map((reading) => (
                          <p
                            key={`id-${reading}`}
                            className="m-0 p-1">
                            {reading}
                          </p>
                        ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </section>
    </>
  );
};

export default Lessons;
