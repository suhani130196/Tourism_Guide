function Cards({ data }) {
    console.log(data);
    return (
      <>
        <div className="w-[300px]  shadow-lg rounded-lg">
          <div className="relative">
            <img src={data.image} className="w-[300px] rounded-t-lg" />
            <div className="absolute top-1 right-1 ">
              {data.whenToVisitSeason === "Winter" ? (
                <p className="bg-blue-400 rounded-lg px-[4px]">winter</p>
              ) : (
                <p className="bg-orange-400 rounded-lg px-[4px]">Summer</p>
              )}
            </div>
          </div>
          <div className="p-2">
            <h1 className="text-2xl">{data.placeName}</h1>
            <p className="font-light text-sm font-sans">{data.description}</p>
            <div className="mt-3">
              <h1 className="text-md font-serif">Ratings: {data.ratings}</h1>
              <h1 className="text-md font-serif">Price: {data.price}</h1>
              
                {data.price >= 12000 ? (
                  <p className="bg-red-500 rounded-md px-1 w-20 text-right">Expensive</p>
                ) : (
                  <p className="bg-green-400 rounded-md px-1 w-20">Cheaper</p>
                )}
             
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default Cards;
  