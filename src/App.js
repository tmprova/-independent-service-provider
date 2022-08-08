import { Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./compoentes/Home/Home";

import Checkout from "./compoentes/checkout/Checkout";
import Login from "./compoentes/login/Login";
import About from "./compoentes/about-us/About";
import NotFound from "./compoentes/notfound/NotFound";
import Header from "./compoentes/header/Header";
import Footer from "./compoentes/footer/Footer";
import Blogs from "./compoentes/blogs/Blogs";
import SignUp from "./compoentes/login/signup/SignUp";
import RequireAuth from "./compoentes/login/requireauth/RequireAuth";

function App() {
  return (
    <div className="App">
      <h1>this is assaingment 10</h1>
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/checkout" element={<RequireAuth>
          <Checkout></Checkout>
        </RequireAuth>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/signup" element={<SignUp></SignUp>}></Route>
        <Route path="/blogs" element={<Blogs></Blogs>}></Route>
        <Route path="/about-us" element={<About></About>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
