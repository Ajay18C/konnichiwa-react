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
    <div className="menu-header">
      <h1>{name}</h1>
      <h3>{cuisines.join(", ") + " - " + costForTwoMessage}</h3>
    </div>
    <h2>Menu</h2>
    <ul className="menu-items">
      {itemCards.map((x, index) => {
        const { imageId, name, price, defaultPrice, ratings, description, isVeg } = x?.card?.info;
        return (
          <li key={x?.card?.info?.id} className="menu-item">
            <img src={CDN_URL + imageId} alt={name} className="menu-item-image" />
            <div className="menu-item-details">
              <div className="menu-item-header">
                <p className="menu-item-name">{name}</p>
                <img className="menu-item-symbol" src = {getSymbol(isVeg)} />
              </div>
              <p className="menu-item-price">Rs.{price / 100 || defaultPrice / 100}</p>
              {ratings && <p className="menu-item-rating">Rating: {ratings.aggregatedRating.rating}</p>}
              {description && <p className="menu-item-description">{description}</p>}
            </div>
          </li>
        );
      })}
    </ul>
  </div>
}

export default Menu
