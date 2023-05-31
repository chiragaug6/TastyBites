import { IMG_CDN_URL } from "../config";

const RestaurantCard = (props) => {
  return (
    <div className="container">
      <div className="card">
        <img
          src={IMG_CDN_URL + props.cloudinaryImageId}
          alt="Food Image"
          className="card-image"
        />
        <div className="card-content">
          <h2 className="card-title">{props.name}</h2>
          <p>{props.cuisines.join(", ")}</p>
          <p className="card-description">{props.address}</p>
          <p className="card-price">{props.costForTwoString}</p>
        </div>
      </div>
    </div>
  );
};

export default RestaurantCard;
