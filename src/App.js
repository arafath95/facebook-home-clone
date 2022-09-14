import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavBar from "./Components/HeaderSection/NavBar";
import Error404 from "./Pages/Error404/Error404";
import Home from "./Pages/Home/Home";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </div>
  );
}

export default App;
