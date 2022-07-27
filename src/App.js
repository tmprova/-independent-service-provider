import logo from "./logo.svg";
import { Routes, Route, Link } from "react-router-dom";
import "./App.css";
import Home from "./compoentes/Home/Home";
import Navbar from "./compoentes/Navbar/Navbar";
import Checkout from "./compoentes/Checkout/Checkout";

function App() {
  return (
    <div className="App">
      <h1>this is assaingment 10</h1>
      <Navbar></Navbar>
      <Routes>
        <Route to="/Home" element={<Home></Home>}>
        </Route>
        <Route to="/Checkout" element={<Checkout></Checkout>}>
        </Route>

        {/* <Route to="/" element={<Home></Home>}>
          Home
        </Route>
        <Route to="/" element={<Home></Home>}>
          Home
        </Route> */}

      </Routes>
    </div>
  );
}

export default App;
