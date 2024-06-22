import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import ImageSlider from "./Components/ImageCarousel";
import Cards from "./Components/Cards";
import Touristplaces from "./TouristPlaces.json";
import About from "./Pages/About";
import Home from "./Pages/Home";
import TouristPlaceDetailedPage from "./Pages/TouristPlaceDetailedPage";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="" element={<Home />} />
        <Route path="/About" element={<About />} />
        <Route path="/:placesToVisit" element={<TouristPlaceDetailedPage />} />
      </Routes>
    </div>
  );
}

export default App;
