import {Routes, Route} from "react-router-dom"
import Home from "./Home";
import Responses from "./Responses";
import Survey from "../features/surveys/Survey";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="responses" element={<Responses />} />
        <Route path="survey" element={<Survey />} />
      </Routes>
    </>
  );
}

export default App;
