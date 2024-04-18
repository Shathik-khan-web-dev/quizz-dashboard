const Lessons = ({ data }) => {
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
            <button
              className="px-3 py-1 rounded-3
               bg-white border-white fw-bold btn_one">
              Start Quiz
            </button>
            <button
              className="px-3 py-1 rounded-3 
              bg-transparent border-white text-white fw-bold btn_two">
              Show Table
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Lessons;
