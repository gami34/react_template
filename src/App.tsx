import { Routes } from "react-router-dom";
import chessitiRouter from "./chessiti/router";

function App() {
  return (
    <Routes>
      <>{chessitiRouter()}</>
    </Routes>
  );
}

export default App;
