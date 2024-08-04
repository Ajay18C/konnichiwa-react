import {useEffect,useState} from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import useMenu from '../utils/useMenu';
import { CDN_URL } from '../utils/constants';
import ResturantCategory from './ResturantCategory';

const Menu = (props) => {
  const {resId} = useParams();
  const resInfo = useMenu(resId);
  const [setIndex,setSetIndex] = useState(null);
  // console.log(resInfo);

  if(resInfo === null) return <Shimmer/>

  const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
  const category = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((x) => x?.card?.card?.["@type"] === 'type.googleapis.com/swiggy.presentation.food.v2.ItemCategory');
  // console.log(category);
  const getSymbol = (isVeg) => {
    return isVeg ? "https://vectorified.com/images/non-veg-icon-20.png" : "https://vectorified.com/images/non-veg-icon-22.png";
  };

  return  resInfo === null  ? <Shimmer/> : 
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <hr></hr>
      <h3 className="font-bold text-xl py-2">{cuisines.join(", ") + " - " + costForTwoMessage}</h3>
      {
      category.map((resCat,i) => 
      <ResturantCategory key={i} categoryData={resCat?.card?.card} showItems={setIndex == i ? true : false} setIndex={() =>setSetIndex(i)} unsetIndex={() =>setSetIndex(null)}/>)
      }
  </div>
}

export default Menu
