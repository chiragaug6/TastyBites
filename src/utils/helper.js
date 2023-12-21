import { Swiggy_API_URL } from "../config";

// Filter data based on search Input
export function filterRestaurantsByName(searchInput, allRestaurants) {
  if (searchInput === "") {
    return [allRestaurants, ""];
  } else {
    const data = allRestaurants.filter((restaurant) =>
      restaurant?.data?.name?.toLowerCase()?.includes(searchInput.toLowerCase())
    );
    if (data.length === 0) {
      return [[], "No matches restaurant found"];
    } else {
      return [data, ""];
    }
  }
}

// this function fetch restaurants data from swiggy's public API then set into state veribales
export async function getAllRestaurants() {
  // Error handling using try catch...
  try {
    const data = await fetch(Swiggy_API_URL);
    const json = await data.json();
    console.log("myJson", json);
    console.log(
      "Json Data find restandt card",
      json.data.success.cards.gridWidget.gridElements.infoWithStyle.info
        .gridElements
    );
    // after first render of component data is updated in state varibales and every time state variable update then component render
    const allRestaurants = await json?.data?.cards[0]?.data?.data?.cards;
    return allRestaurants;
  } catch (error) {
    console.log(error);
  }
}
