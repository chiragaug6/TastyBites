import { useEffect, useState } from "react";
import { sortingOptions } from "../config";
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
  const [sortOption, setSortOption] = useState("");

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

  const handleSorting = (sortValue) => {
    //1. Sort By Delivery Time
    if (sortValue == "Delivery Time") {
      setFilteredRestaurants((prevItems) => {
        const sortedItems = [...prevItems].sort(
          (a, b) => a.data.deliveryTime - b.data.deliveryTime
        );
        return sortedItems;
      });
    }

    //2. sort By Rating
    if (sortValue == "Rating") {
      setFilteredRestaurants((prevItems) => {
        const sortedItems = [...prevItems].sort(
          (a, b) => b.data.avgRating - a.data.avgRating
        );
        return sortedItems;
      });
    }

    //3. Sort By Price (LOW TO HIGH)
    if (sortValue == "Cost: Low To High") {
      setFilteredRestaurants((prevItems) => {
        const sortedItems = [...prevItems].sort(
          (a, b) => a.data.costForTwo - b.data.costForTwo
        );
        return sortedItems;
      });
    }

    //4. Sort By Price (HIGH TO LOW)
    if (sortValue == "Cost: High To Low") {
      setFilteredRestaurants((prevItems) => {
        const sortedItems = [...prevItems].sort(
          (a, b) => b.data.costForTwo - a.data.costForTwo
        );
        return sortedItems;
      });
    }
  };

  if (!youAreOnline) {
    return <h1>Please Check Your Internet Connecetion</h1>;
  }

  // if (!allRestaurants) return null;

  return (
    <div className="bg-white">
      <div className="w-full flex  items-center justify-between px-44 pt-2 boredr-2 border-red-200">
        {/* Searching */}
        <div className="w-1/2 flex items-center justify-start pt-2 boredr-2 border-red-200">
          <input
            className="w-full rounded-l-xl p-2 my-11 border-2 outline-none border-red-200"
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
            className="w-32 h-11 text-white font-Poppins text-xl bg-red-500 rounded-r-xl"
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
        {/* Sorting */}
        <div className="w-64 flex justify-center items-center gap-2 border-2 border-red-200 rounded-md">
          {/* <label className="text-sm font-medium text-gray-700">Sort by:</label> */}
          <select
            value={sortOption}
            onChange={(e) => {
              console.log("Something change");
              handleSorting(e.target.value);
              setSortOption(e.target.value);
            }}
            className="block w-2/3 py-2 pr-8 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            <option value="">Select an option</option>
            {sortingOptions.map((option) => (
              <option
                key={option.value}
                value={option.value}
                className="transition-shadow"
              >
                {option.label}
              </option>
            ))}
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg className="w-4 h-4" viewBox="0 0 20 20" fill="currentColor">
              <path
                fillRule="evenodd"
                d="M10.293 13.95a1 1 0 01-1.414 0l-3.536-3.536a1 1 0 011.414-1.414L10 11.586l2.829-2.829a1 1 0 111.414 1.414l-3.536 3.536z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </div>
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
