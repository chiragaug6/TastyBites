import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { removeItem } from "../utils/cartSlice";

const FoodItem = ({ name, description, imageId, price, id }) => {
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeItem(id));
  };

  return (
    <div className="w-2/3 h-32 p-4 mb-5 mt-5 shadow-lg bg-pink-100 flex items-center justify-between">
      <div className="flex gap-8 items-center">
        <img className="w-40 rounded-lg" src={IMG_CDN_URL + imageId} />
        <div>
          <h2 className="font-mono text-base text-black">{name}</h2>
          <h3 className="text-xs">{description}</h3>
          <h4 className="text-sm">Rupees: {price}</h4>
        </div>
      </div>
      <button
        className="w-16 h-6 text-sm font-mono bg-red-400 rounded-md"
        onClick={() => handleRemove(id)}
      >
        Remove
      </button>
    </div>
  );
};

export default FoodItem;
