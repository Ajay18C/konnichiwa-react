import { CDN_URL } from "../utils/constants";

const ResturantCard = (props) => {
    const {cloudinaryImageId, name, avgRating, cuisines, costForTwo, slaString} = props?.resData?.info;
    return (
      <div className="res-card">
        <img
          className="res-logo"
          alt="res-logo"
          src={
            CDN_URL +
            cloudinaryImageId
          }
        />
        <h3>{name}</h3>
        <h4>{cuisines.join(", ")}</h4>
        <h4>{avgRating} stars</h4>
        <h4>{costForTwo}</h4>
        <h4>{slaString}</h4>
      </div>
    );
};

export default ResturantCard;