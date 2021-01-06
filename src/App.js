import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Adding css
import "./App.css";

// Components
import { Signin, Home, Signup } from "./components";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
