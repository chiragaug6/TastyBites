import { useEffect, useState } from "react";
import { Swiggy_API_URL } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurantsByName, getAllRestaurants } from "../utils/helper";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);

  // useEffect hook's callback function is only call after first render of component only ones because of the Empty dependicies Array
  useEffect(() => {
    updateState();
  }, []);

  async function updateState() {
    setIsLoaded(false);
    const restaurantsCards = await getAllRestaurants();
    setAllRestaurants(restaurantsCards);
    setFilteredRestaurants(restaurantsCards);
    setIsLoaded(true);
  }

  // if (!allRestaurants) return null;

  return (
    <>
      <div className="search-bar">
        <input
          type="search"
          value={searchInput}
          placeholder="Search 🔎..."
          onChange={(event) => {
            setSearchInput(event.target.value);
            const [data, ErrorMsg] = filterRestaurantsByName(
              searchInput,
              allRestaurants
            );
            setFilteredRestaurants(data);
            setErrorMessage(ErrorMsg);
          }}
        />
        <button
          className="search-btn"
          onClick={() => {
            const [data, ErrorMsg] = filterRestaurantsByName(
              searchInput,
              allRestaurants
            );
            setFilteredRestaurants(data);
            setErrorMessage(ErrorMsg);
          }}
        >
          Search
        </button>
      </div>

      {errorMessage && <div className="error-container">{errorMessage}</div>}

      {/* Conditional Rendering  */}
      {!isLoaded ? (
        <Shimmer />
      ) : (
        <div className="restaurantList">
          {filteredRestaurants?.map((restaurant) => {
            return (
              // passing unique key to every component for fast Reconciliation
              <Link
                to={"/restaurant/" + restaurant?.data?.id}
                key={restaurant?.data?.id}
              >
                <RestaurantCard {...restaurant?.data} />
              </Link>
            );
          })}
        </div>
      )}
    </>
  );
};

export default Body;
