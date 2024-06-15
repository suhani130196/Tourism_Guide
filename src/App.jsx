import { useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


import Header from "./components/Navbar";
import About from "./components/about";
import ImageSlider from "./components/ImageCarousel";
import Cards from './components/Cards';
import Touristplaces from "./TouristPlaces.json";


function App() {
  return (
    <div className="">
      <Header />
      <ImageSlider/>
      <div className="m-[40px] flex flex-wrap gap-8 items-center justify-center">
          <Cards data={Touristplaces[0]} />
          <Cards data={Touristplaces[1]} />
          <Cards data={Touristplaces[2]} />
          <Cards data={Touristplaces[3]} />
          <Cards data={Touristplaces[4]} />
          <Cards data={Touristplaces[5]} />
          <Cards data={Touristplaces[6]} />
          <Cards data={Touristplaces[7]} />
        </div>
      <Routes>
        <Route exact path="/about" element={<About />} />
      </Routes>
      
    </div>
  );
}

export default App;
