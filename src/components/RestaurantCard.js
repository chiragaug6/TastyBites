import { IMG_CDN_URL } from "../config";

const RestaurantCard = (props) => {
  return (
    <div className="w-72 h-80 pl-5 pr-5 pt-5 pb-14 border border-white hover:shadow-lg hover:border-1 hover:border-gray-300">
      <img
        src={IMG_CDN_URL + props.cloudinaryImageId}
        alt="Food Image"
        className="w-64 h-40"
      />
      <div className="flex items-start flex-col gap-4 mt-2">
        <div>
          <p className="text-[17px] font-medium break-words text-[#282C3F]">
            {props.name}
          </p>
          <p className="text-[13px] text-[#686b78]">
            {props.cuisines.join(", ")}
          </p>
        </div>
        <ul className="w-full flex justify-between items-center">
          <li className="bg-[#48c479] text-white w-11 h-5  text-xs font-normal pe-1 flex items-center justify-center">
            {props.avgRating}
          </li>
          <li className="text-xs text-[#535665]">{props.deliveryTime} MINS</li>
          <li className="text-xs text-[#535665]">{props.costForTwoString}</li>
        </ul>
      </div>
    </div>
  );
};

export default RestaurantCard;
