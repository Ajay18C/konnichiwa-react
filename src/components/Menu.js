import {useEffect,useState} from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useMenu from '../utils/useMenu';
import { CDN_URL } from '../utils/constants';

const Menu = (props) => {
  const {resId} = useParams();
  const resInfo = useMenu(resId);
  console.log(resInfo);

  if(resInfo === null) return <Shimmer/>

  const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const getSymbol = (isVeg) => {
    return isVeg ? "https://vectorified.com/images/non-veg-icon-20.png" : "https://vectorified.com/images/non-veg-icon-22.png";
  };

  return  resInfo === null  ? <Shimmer/> : 
    <div className="menu">
    <div className="text-xl font-bold">
      <h1 className="flex justify-center p-4">{name}</h1>
      <hr></hr>
      <h3 className="flex justify-center p-2">{cuisines.join(", ") + " - " + costForTwoMessage}</h3>
    </div>
    <ul className="menu-items">
      {itemCards.map((x, index) => {
        const { imageId, name, price, defaultPrice, ratings, description, isVeg } = x?.card?.info;
        return (
          <li key={x?.card?.info?.id} className="flex bg-orange-200 p-4 m-2 rounded-lg hover:bg-orange-300">
            <img src={CDN_URL + imageId} alt={name} className="size-40" />
            <div className="menu-item-details px-20">
              <div className="flex">
                <p className="font-bold text-xl m-2">{name}</p>
                <img className="size-5 m-3" src = {getSymbol(isVeg)} />
              </div>
              <p className="font-mono font-bold p-2">Rs.{price / 100 || defaultPrice / 100}</p>
              {ratings?.aggregatedRating?.rating && <p className="menu-item-rating">Rating: {ratings.aggregatedRating.rating}</p>}
              {description && <p className="menu-item-description">{description}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
}

export default Menu
