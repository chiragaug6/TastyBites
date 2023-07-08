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
        filterItems = prevItems.filter((item) => item.data.avgRating != "--");
        const sortedItems = [...filterItems].sort(
          (a, b) => b.data.avgRating - a.data.avgRating
        );
        return [...sortedItems];
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
    return (
      <h1 className="text-2xl font-semibold text-black text-center m-32">
        Please Check Your Internet Connecetion
      </h1>
    );
  }

  return (
    <div className="bg-white">
      <div className="w-full flex items-center justify-between px-44 pt-2 boredr-2 border-red-200 xl:px-28 lg:px-10 md:flex-col md:px-8 sm:px-0 sm:mb-6">
        {/* Searching */}
        <div className="w-1/2 flex items-center justify-start pt-2 boredr-2 border-red-200 md:w-2/3 sm:w-11/12 sm:mb-5">
          <input
            className="w-full rounded-l-xl p-2 my-11 border-2 outline-none border-red-200 xl:my-9 lg:my-7 md:my-3 md:text-base sm:my-1 sm:p-1 sm:text-xs"
            type="text"
            value={searchInput}
            placeholder="Search 🔎..."
            onChange={(event) => {
              setSearchInput(event.target.value);
              if (event.target.value == "") {
                setFilteredRestaurants(allRestaurants);
                setErrorMessage("");
              }
              // const [data, ErrorMsg] = filterRestaurantsByName(
              //   searchInput,
              //   allRestaurants
              // );
              // setFilteredRestaurants(data);
              // setErrorMessage(ErrorMsg);
            }}
          />
          <button
            className="w-32 h-11 text-white font-Poppins text-xl bg-red-500 rounded-r-xl xl:text-lg lg:text-base md:text-sm sm:text-xs sm:w-auto  sm:h-7 sm:px-3 "
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
        <div className="w-52 flex justify-center items-center gap-2 border-2 border-red-200 rounded-md xl:w-48 md:w-32 md:text-base sm:text-xs sm:justify-end md:mb-5">
          <select
            value={sortOption}
            onChange={(e) => {
              handleSorting(e.target.value);
              setSortOption(e.target.value);
            }}
            className="w-full px-5 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 xl:px-2 rounded-md md:text-sm sm:text-xs"
          >
            <option value="">Sort By </option>
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
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center text-gray-700">
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
        <div className="w-full flex gap-x-5 gap-y-20 pb-5 flex-wrap items-start justify-center sm:gap-y-3 sm:pb-0">
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
