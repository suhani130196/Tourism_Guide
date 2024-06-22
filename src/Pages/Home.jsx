import { useState, useEffect } from "react";
import Navbar from "../Components/Navbar";
import ImageSlider from "../Components/ImageCarousel";
import Cards from "../Components/Cards";
import Touristplaces from "../TouristPlaces.json";

function Home() {
  const cities = ["Moscow", "Tokyo", "Chennai"];
  useEffect(() => {
    var requestOptions = {
      method: "GET",
    };

    for (let index in cities) {
      fetch(
        `https://api.geoapify.com/v1/geocode/autocomplete?text=${cities[index]}&apiKey=50e3646aa90c4b4b997c248dd3ab3724`,
        requestOptions
      )
        .then((response) => response.json())
        .then((result) => console.log(result))
        .catch((error) => console.log("error", error));
    }
  }, []);

  return (
    <>
      <ImageSlider />
      <div>
        <h1 className="text-center mt-14 text-3xl font-bold">
          Popular in India!
        </h1>
        <p className="text-center mt-4 text-lg font-extralight">
          India is a home to the finest architectural heritage, serene ghats,
          spectacular landscapes and largest tiger reserve{" "}
        </p>
      </div>
      <div className="m-[40px] flex flex-wrap gap-8 items-center justify-center">
        {Touristplaces.map((places) => (
          <Cards
            img={places.image}
            placeName={places.placeName}
            
            whenToVisitSeason={places.whenToVisitSeason}
            description={places.description}
            ratings={places.ratings}
            price={places.price}
          />
        ))}
        
      </div>
    </>
  );
}
export default Home;
