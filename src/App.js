import React from "react";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home/Home/Home.jsx";
import "./App.css";
import Appointment from "./Pages/Appointment/Appointment/Appointment.jsx";

const App = () => {
  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="appointment" element={<Appointment />} />
      </Routes>
    </div>
  );
};
export default App;
