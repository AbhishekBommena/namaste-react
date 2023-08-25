import { allRestaurantsObjs } from "../utils/mockData";
import SearchBarComponent from "./SearchBarComponent";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const BodyComponent = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState(allRestaurantsObjs);
  const [searchFieldText, setSearchFieldText] = useState("");
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const handleFiltering = () => {
    const filteredList = filteredRestaurants.filter(
      (res) => res.info.avgRating > 4
    );
    setFilteredRestaurants(filteredList);
  };

  useEffect(() => {
    getRestaurants();
  }, []);

  const getRestaurants = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.430325&lng=78.3258381&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListOfRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );

    setFilteredRestaurants(
      json?.data?.cards[5]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const handleSearch = () => {
    const filteredRes = listOfRestaurants.filter((res) =>
      res.info.name.toLowerCase().includes(searchFieldText)
    );
    setFilteredRestaurants(filteredRes);
  };

  return (
    <div className="bodyContainer">
      {/* <SearchBarComponent /> */}
      <div className="topBar">
        <div className="searchContainer">
          <input
            type="search"
            className="searchField"
            placeholder="Search for specific restaurant ... "
            value={searchFieldText}
            onChange={(e) => setSearchFieldText(e.target.value)}
          />
          <button className="searchIconBtn" onClick={handleSearch}>
            <i className="fa-solid fa-magnifying-glass fa-lg"></i>
          </button>
        </div>
        <div className="filterBtns">
          <button className="topRatedResBtn" onClick={handleFiltering}>
            Top rated
          </button>
          <button className="resetBtn" onClick={() => {setFilteredRestaurants(listOfRestaurants); setSearchFieldText("");}}>
            <i class="fa-solid fa-arrows-rotate"></i>
          </button>
        </div>
      </div>

      <div className="restaurantContainer">
        {filteredRestaurants.map((eachRestaurant) => (
          <Link to={"/restaurant/"+eachRestaurant.info.id}><RestaurantCard
            key={eachRestaurant.info.id}
            resData={eachRestaurant}
          /></Link>
        ))}
      </div>
    </div>
  );
};
export default BodyComponent;
