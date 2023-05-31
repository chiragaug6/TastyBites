import { useState } from "react";
import { restaurantList } from "../config";
import RestaurantCard from "./RestaurantCard";

function filterData(name) {
  return restaurantList.filter((restaurant) =>
    restaurant.data.name.toLowerCase().includes(name)
  );
}

const Body = () => {
  const [searchInput, setSearchInput] = useState("");
  const [restaurants, setRestaurants] = useState(restaurantList);
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
            const data = filterData(searchInput);
            setRestaurants(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="restaurantList">
        {restaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.data.id} {...restaurant.data} />
          );
        })}
      </div>
    </>
  );
};

export default Body;
