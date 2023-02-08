import logo from "./images/demo2_logo.png";
import model from "./images/model-1.png";
import "./App.css";
import "./all.min.css";
import "./style.css";
import "./media.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Blog from "./Blog";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
    </>
  );
}

export default App;
