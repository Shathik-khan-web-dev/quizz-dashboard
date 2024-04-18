import React from "react";
import { Routes, Route } from "react-router-dom";
import QuizLayout from "../Layout/QuizLayout";
import { Dashboard, Leaderboard, Profile } from "../Pages/Index";

const QuizRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<QuizLayout />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="leaderboard" element={<Leaderboard />} />
        <Route path="profile" element={<Profile />} />
      </Route>
    </Routes>
  );
};

export default QuizRouter;
