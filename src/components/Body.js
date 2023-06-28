import { useEffect, useState } from "react";
import { Swiggy_API_URL } from "../config";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterRestaurantsByName, getAllRestaurants } from "../utils/helper";
import useOnline from "../utils/useOnline";
import noResult from "../assets/Images/no-results.png";

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [allRestaurants, setAllRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);

  const youAreOnline = useOnline();

  // useEffect hook's callback function is only call after first render of component only ones because of the Empty dependicies Array
  useEffect(() => {
    updateState();
  }, []);

  async function updateState() {
    setIsLoaded(true);
    const restaurantsCards = await getAllRestaurants();
    setAllRestaurants(restaurantsCards);
    setFilteredRestaurants(restaurantsCards);
    setIsLoaded(false);
  }

  if (!youAreOnline) {
    return <h1>Please Check Your Internet Connecetion</h1>;
  }

  // if (!allRestaurants) return null;

  return (
    <div className="bg-white">
      <div className="w-full flex items-center justify-center pt-2">
        <input
          className="w-2/4 rounded-l-xl p-2 my-11 border outline-none"
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
          className="w-32 h-11 text-white bg-red-500 rounded-r-xl"
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

      {/* {errorMessage && <div className="error-container">{errorMessage}</div>} */}

      {errorMessage && (
        <img
          className="h-96 w-96 m-auto"
          src={noResult}
          alt="No Result Found"
        />
      )}

      {/* Conditional Rendering  */}
      {isLoaded ? (
        <Shimmer />
      ) : (
        <div className="w-full flex gap-x-5 gap-y-20 pb-5 flex-wrap items-start justify-center">
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
    </div>
  );
};

export default Body;
