import { CLOUD_IMG_URL } from "../utils/constants";

const RestaurantCard = (props) => {
  const { name, cuisines, avgRating, costForTwo, cloudinaryImageId } =
    props.resData.info;
  const cloudinaryImageUrl = CLOUD_IMG_URL + cloudinaryImageId;
  return (
    <div className="resCardContainer">
      <img src={cloudinaryImageUrl} className="resCardImg" />
      <p className="resName">{name}</p>
      <p className="description">{cuisines.join(",")}</p>
      <h4>{avgRating}</h4>
      <h5>{costForTwo}</h5>
    </div>
  );
};
export default RestaurantCard;