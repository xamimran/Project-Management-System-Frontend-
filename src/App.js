import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Adding css
import "./App.css";

// Components
import { Signin, Home, Signup, ResetPassword } from "./components";

export const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/resetPassword" element={<ResetPassword />} />
          <Route path="/home" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
