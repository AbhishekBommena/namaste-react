import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ShimmerComp from "./ShimmerComp";

const Restaurant = () => {
  const [resInfoObj, setResInfoObj] = useState(null);

  const {resId} = useParams();
  useEffect(() => {
    getResInfo();
  }, []);
  const getResInfo = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=17.4014664&lng=78.3723567&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER"
    );

    const json = await data.json();
    
    console.log(json);
    setResInfoObj(json);
  };

  if( resInfoObj === null) return <ShimmerComp/>;
  const {name,areaName,costForTwoMessage,cuisines,avgRating,totalRatingsString,sla} = resInfoObj?.data?.cards[0]?.card?.card?.info;

  return (
    <div className="about-res-container">
      <div className="res-header-container">
        <div className="header-section-1">
          <div className="about-res">
            <p className="res-heading">{name}</p>
            <p className="type-of-res">{cuisines.toString()}</p>
            <p className="location">{areaName}, {sla.lastMileTravelString}</p>
          </div>
          <div className="res-rating-card">
            <p className="res-rating">
              <i class="fa-solid fa-star rating-star"></i> {avgRating}
            </p>
            <hr className="hr-1" />
            <p className="noOf-rating">{totalRatingsString}</p>
          </div>
        </div>
        <hr className="hr-2" />
        <div className="header-section-2">
          <div className="res-details">
            <p className="time-takes">
              <i class="fa-solid fa-clock"></i> {sla.deliveryTime} MINS
            </p>
            <p className="price-for-two">
              <i class="fa-solid fa-indian-rupee-sign"></i> {costForTwoMessage}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Restaurant;
