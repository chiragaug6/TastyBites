export const IMG_CDN_URL =
  "https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/";

// export const Swiggy_API_URL =
//   "https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING";

export const Swiggy_API_URL =
  "https://corsproxy.io/?https://www.swiggy.com/mapi/homepage/getCards?lat=22.3261268&lng=70.8202833";

export const FETCH_MENU_API =
  "https://corsproxy.io/?https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=";

export const sortingOptions = [
  { value: "Delivery Time", label: "Delivery Time" },
  { value: "Rating", label: "Rating" },
  { value: "Cost: Low To High", label: "Cost: Low To High" },
  { value: "Cost: High To Low", label: "Cost: High To Low" },

  // Add more sorting options if needed
];
