import { resObj } from "../utils/mockData";
import SearchBarComponent from "./SearchBarComponent";
import RestaurantCard from "./RestaurantCard";
import { useState } from "react";
const BodyComponent = () => {
  const [listOfRestaurants,setListOfRestaurants] = useState(resObj);
  const handleFiltering = () => {
      const filteredList = listOfRestaurants.filter(res => res.info.avgRating > 4);
      setListOfRestaurants(filteredList); 
  }
  
  return (
    <div className="bodyContainer">
      <SearchBarComponent />
      <button className="filterBtn" onClick={handleFiltering}>Top rated restaurants</button>
      <div className="restaurantContainer">
        {listOfRestaurants.map((eachRestaurant) => (
          <RestaurantCard
            key={eachRestaurant.info.id}
            resData={eachRestaurant}
          />
        ))}
      </div>
    </div>
  );
};
export default BodyComponent;
