import { useParams } from "react-router-dom";
import TouristPlace from "../TouristPlaces.json";

function TouristPlaceDetailedPage() {
  let { placesToVisit } = useParams();
  console.log("Suhani - placesToVisit ", placesToVisit);
  let place = TouristPlace.find((place) => place.placeName == placesToVisit);
  console.log("Suhani - place ", place);
  return (
    <>
      <div className="w-[1470px] mx-auto my-6">
        <img
          src={place.image}
          className="w-[1470px] h-[618px] mx-auto" />
        <div className="w-[1000px]  mx-auto my-3  p-1">
          <h1 className='text-4xl font-serif text-center'>{place.placeName}</h1>
          <p className='mt-8'>{place.detail}</p>
        </div>
      </div>
    </>
  );
}
export default TouristPlaceDetailedPage;
