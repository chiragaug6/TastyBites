import { useParams } from "react-router-dom";
import useRestaurantInfo from "../utils/useRestaurantInfo";
import { RestaurantMenuShimmer } from "./Shimmer";
import { IMG_CDN_URL } from "../config";

const RestaurantMenu = () => {
  const params = useParams();
  const { resId } = params;

  const restaurantInfo = useRestaurantInfo(resId);

  console.log("restaurantInfo");
  console.log(restaurantInfo);

  const info = restaurantInfo?.cards[0]?.card?.card?.info;

  console.log("info");
  console.log(info);

  const recommended =
    restaurantInfo?.cards[restaurantInfo.cards.length - 1]?.groupedCard
      ?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

  console.log("recommended");
  console.log(recommended);

  return !restaurantInfo ? (
    <RestaurantMenuShimmer />
  ) : (
    <div className="w-2/3 mx-auto h-auto border border-slate-300 ">
      <div className="flex justify-between items-start p-6">
        <div className="flex flex-col gap-1">
          <span className="text-2xl font-bold break-words text-[#282C3F]">
            {info.name.toUpperCase()}
          </span>
          <span className="text-[13px] text-[#686b78]">
            S{info.cuisines.join(", ")}
          </span>
          <span className="text-[13px] text-[#686b78]">
            {info.areaName}, {info.city}
          </span>
          <span className="text-[13px] text-[#686b78]">
            {info.avgRating} | {info.totalRatings}+ratings
          </span>
        </div>
        <img
          src={IMG_CDN_URL + info.cloudinaryImageId}
          alt="Food Image"
          className="w-60 h-36 rounded-md"
        />
      </div>
      <hr className="mx-6" />
      <div className="h-14 flex items-center justify-start gap-8 px-7">
        <div>{info.sla.slaString}</div>
        <div>{info.costForTwoMessage}</div>
      </div>
      <hr className="mx-6" />
      <div className="h-14 pl-7 flex items-center text-xl font-bold break-words text-[#282C3F]">
        Recommended({recommended?.length})
      </div>
      {recommended?.map((recRes) => {
        return (
          <>
            <div
              key={recRes?.card?.info?.id}
              className="flex justify-between px-7 my-6 border-black bottom-1"
            >
              <div className="flex flex-col gap-2">
                <h1 className="text-base font-semibold">
                  {recRes?.card?.info?.name}
                </h1>
                <h2 className="text-base">{recRes?.card?.info?.price}</h2>
                <p className="text-xs text-[#535665]">
                  {recRes?.card?.info?.description}
                </p>
              </div>
              <div className="text-center">
                {recRes?.card?.info?.imageId == undefined ? (
                  <img
                    src="https://placehold.co/128x80"
                    alt="Food Image"
                    className="w-32 h-20 rounded-md"
                  />
                ) : (
                  <img
                    src={IMG_CDN_URL + recRes?.card?.info?.imageId}
                    alt="Food Image"
                    className="w-32 h-20 "
                  />
                )}
                <button className="h-5 w-24 rounded-sm  font-semibold shadow-lg text-xs bg-green-300 transition-shadow hover:text-center hover:scale-105">
                  ADD TO CART
                </button>
              </div>
            </div>
            <hr className="mx-6" />
          </>
        );
      })}
    </div>
  );
};

export default RestaurantMenu;
