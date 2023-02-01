import Sidebar from "./components/Sidebar";
import "./App.css";
import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import Line from "./components/Charts/Line";
import Pie from "./components/Charts/Pie";
import Stacked from "./components/Charts/Stacked";
import ChartHeader from "./components/ChartHeader";

function App() {
  return (
    <div className="App">
      <Navbar />
      <ChartHeader/>
      <Sidebar />
      <Footer />
      <Routes>
        <Route path="/line" element={<Line />} />
        <Route path="/pie" element={<Pie />} />
        <Route path="/bar" element={<Stacked />} />
        <Route path="/area" element={<Stacked />} />
      </Routes>
    </div>
  );
}

export default App;
