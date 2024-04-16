import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import QuizRouter from "./Router/QuizRouter";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/*" element={<QuizRouter />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
