import { Link } from "react-router-dom";

function Cards({
  img,
  placeName,
  description,
  ratings,
  price,
  whenToVisitSeason,
}) {
  return (
    <>
      <Link to={`/${placeName}`} className="hover:cursor-pointer">
        <div className="w-[300px] shadow-lg rounded-lg">
          <div className="relative">
            <img src={img} className="w-[300px] rounded-t-lg" />
            <div className="absolute top-1 right-1">
              {whenToVisitSeason === "Winter" ? (
                <p className="bg-pink-600  px-[4px]">winter</p>
              ) : (
                <p className="bg-orange-300 rounded-lg px-[4px]">Summer</p>
              )}
            </div>
          </div>
          <div className="p-2">
            <h1 className="text-2xl">{placeName}</h1>
            <p className="font-light text-sm font-sans">{description}</p>
            <div className="mt-3">
              <h1 className="text-md font-serif">Ratings: {ratings}</h1>
              <h1 className="text-md font-serif">Price: {price}</h1>
            </div>
          </div>
        </div>
      </Link>
    </>
    
  );
}

export default Cards;
