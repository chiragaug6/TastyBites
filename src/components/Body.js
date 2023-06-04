import { useEffect, useState } from "react";
import { Swiggy_API_URL } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

// Filter data based on search Input
function filterData(searchInput, allRestaurants) {
  return allRestaurants.filter((restaurant) =>
    restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
  );
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  // useEffect hook's callback function is only call after first render of component only ones because of the Empty dependicies Array
  useEffect(() => {
    console.log("data fetching inside useEffect");
    getAllRestaurants();
  }, []);

  // this function fetch restaurants data from swiggy's public API then set into state veribales
  async function getAllRestaurants() {
    // Error handling using try catch...
    try {
      const data = await fetch(Swiggy_API_URL);
      const json = await data.json();

      // after first render of component data is updated in state varibales and every time state variable update then component render
      setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
      setFilteredRestaurants(json?.data?.cards[2]?.data?.data?.cards);
    } catch (error) {
      console.log(error);
    }
  }

  function searchData(searchText, restaurants) {
    // corner case to check whether Input-filed is empty or not
    if (searchText !== "") {
      const data = filterData(searchText, restaurants);
      setFilteredRestaurants(data);
      setErrorMessage("");
      if (data.length === 0) {
        setErrorMessage("No matches restaurant found");
      }
    } else {
      setErrorMessage("");
      setFilteredRestaurants(restaurants);
    }
  }

  return (
    <>
      <div className="search-bar">
        <input
          type="search"
          value={searchInput}
          placeholder="Search 🔎..."
          onChange={(event) => setSearchInput(event.target.value)}
        />
        <button
          className="search-btn"
          onClick={() => {
            // when user click on search button
            searchData(searchInput, allRestaurants);
          }}
        >
          Search
        </button>
      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* Conditional Rendering  */}
      {allRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
        <div className="restaurantList">
          {filteredRestaurants.map((restaurant) => {
            return (
              // passing unique key to every component for fast Reconciliation
              <RestaurantCard
                key={restaurant?.data?.id}
                {...restaurant?.data}
              />
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
