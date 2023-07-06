import { IMG_CDN_URL } from "../config";
import { FaStar } from "react-icons/fa6";

const RestaurantCard = ({
  cloudinaryImageId,
  name,
  cuisines,
  avgRating,
  deliveryTime,
  costForTwoString,
}) => {
  return (
    <div className="w-72 h-80 pl-5 pr-5 pt-5 pb-14 border border-white hover:shadow-lg hover:border-1 hover:border-gray-300 font-Poppins">
      <img
        src={IMG_CDN_URL + cloudinaryImageId}
        alt="Food Image"
        className="w-64 h-40"
      />
      <div className="flex items-start flex-col gap-4 mt-2">
        <div>
          <p className="text-[17px] font-medium break-words text-[#282C3F]">
            {name}
          </p>
          <p className="text-[13px] text-[#686b78]">{cuisines.join(", ")}</p>
        </div>
        <ul className="w-full flex justify-between items-center">
          <li className="bg-[#48c479] text-white w-11 h-5  text-xs font-normal pe-1 flex items-center justify-evenly">
            <FaStar /> <p>{avgRating}</p>
          </li>
          <li className="text-xs text-[#535665]">{deliveryTime} MINS</li>
          <li className="text-xs text-[#535665]">{costForTwoString}</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantCard;
