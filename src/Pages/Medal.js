import React from "react";
import "../Layout/Medal.css";

const Medal = ({ rank }) => {
  let medalClass = "";

  if (rank <= 3) {
    medalClass = "quiz-medal__circle--gold";
  } else if (rank <= 10) {
    medalClass = "quiz-medal__circle--silver";
  } else {
    medalClass = "quiz-medal__circle--bronze";
  }

  return (
    <div className="quiz-medal">
      <div className={`quiz-medal__circle ${medalClass}`}>
        <span>{rank}</span>
      </div>
      <div className="quiz-medal__ribbon quiz-medal__ribbon--left"></div>
      <div className="quiz-medal__ribbon quiz-medal__ribbon--right"></div>
    </div>
  );
};

export default Medal;
