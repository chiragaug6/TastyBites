import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ name, description, imageId, price, id }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="w-2/3 h-32 p-4 mb-4 mt-4 hover:shadow-md border-2 border-gray-100 rounded-lg bg-white flex items-center justify-between font-Poppins ">
      <div className="flex gap-8 items-center">
        {imageId == undefined ? (
          <img
            src="https://placehold.co/128x80"
            alt="Food Image"
            className="w-32 h-24 rounded-md"
          />
        ) : (
          <img
            src={IMG_CDN_URL + imageId}
            alt="Food Image"
            className="w-36 h-24 rounded-md"
          />
        )}
        <div>
          <h2 className="font-mono text-base text-black">{name}</h2>
          <h3 className="text-xs">{description}</h3>
          <h4 className="text-sm">Rupees: {price / 100}</h4>
        </div>
      </div>
      <button
        className="w-16 h-6 text-sm font-mono bg-red-400 rounded-md ml-4 "
        onClick={() => handleRemove(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default FoodItem;
