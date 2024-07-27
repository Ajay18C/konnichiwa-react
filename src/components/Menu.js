import {useEffect,useState} from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';
import { MENU_API,CDN_URL } from '../utils/constants';

const Menu = (props) => {
    const [resInfo,setResInfo] = useState(null);
    const {resId} = useParams();
  useEffect(() => {
    fetchMenu()
  },[]);

  const fetchMenu = async () => {
    const data = await fetch(MENU_API+resId);
    const json = await data.json();
    setResInfo(json.data);
    console.log(resInfo);
  }

  if(resInfo === null) return <Shimmer/>

  const {name, cuisines, cloudinaryImageId, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
  const {itemCards} = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;

  return  resInfo === null  ? <Shimmer/> : 
    (<div className="menu">
        <h1>{name}</h1>
        <h3>{cuisines.join(", ") + " - " + costForTwoMessage}</h3>
        <h2>Menu</h2>
        <ul>
            {
            itemCards.map((x,index) => {
                return <li key={x?.card?.info?.id}>
                    <img src={CDN_URL+x?.card?.info?.imageId} alt={x?.card?.info?.name} />
                    <div>
                        <p className="name">{x?.card?.info?.name}</p>
                        <p className="price">Rs.{x?.card?.info?.price / 100 || x?.card?.info?.defaultPrice / 100}</p>
                    </div>
                </li>
            })
            }
        </ul>
    </div>
  )
}

export default Menu
