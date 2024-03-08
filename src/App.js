import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Product from "./pages/Product";
import Detail from "./pages/Detail";
import NotFound from "./components/NotFound.js";
import Cart from "./pages/Cart.jsx";
import Profile from "./pages/Profile.jsx";

const App = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="store/" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Product" element={<Product />} />
          <Route path="/Cart" element={<Cart />} />
          <Route path="/Profile" element={<Profile />} />
          <Route path="/Detail/:id" element={<Detail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
