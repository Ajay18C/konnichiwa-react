import ResturantCard, {promotedCards} from "./ResturantCard";
import { useState, useEffect, useContext} from "react";
import Shimmer from "./Shimmer";
import resObj from '../utils/mockData'
import { BODY_API } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import Offline from "./Offline";
import UserContext from "../utils/UserContext";

//tips
// 1. never use useState outside the function
// 2. try to use useState only on top
// 3. never create a useState inside a if else condition
// 4. never create a useState inside a loop function

const Body = () => {
  // Local State variable - Super powerful variable
  const [listOfResturant,setListOfResturant] = useState([]);
  const [searchText,setSearchText] = useState("");
  const [filterListOfResturant,setFilterListOfResturant] = useState([]);
  const ResturantCardPromoted = promotedCards(ResturantCard);
  const {loggedInUser, setUserName} = useContext(UserContext); 
  // console.log(listOfResturant,"lis")

  const fetchData = async () => {
    // https://corsproxy.io/?
    const data = await fetch(BODY_API);
    const json = await data.json();
    // console.log(json);
    // console.log(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilterListOfResturant(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
  }
  useEffect(()=>{
    fetchData();
  },[]);

  const onlineStatus = useOnlineStatus();

  // console.log("status",onlineStatus);


  if(onlineStatus === false) return <Offline/>;

  if(listOfResturant.length === 0){
    return <Shimmer/>
  }

  // console.log("Body Rendered");

  // Normal js variable
  // let listOfResturant = resObj;

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input type="text" data-testid='searchInput' className="border border-solid border-black" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
          <button className="px-4 bg-orange-300 m-4 rounded-xl" onClick={() =>{
            setListOfResturant(filterListOfResturant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())))
          }}>Search</button>
        </div>
        <div className="m-4 p-4 flex items-center">
        <button
          className="px-4 bg-orange-400 m-4 rounded-xl"
          onClick={() => {
            setListOfResturant(listOfResturant.filter((x) => x.info.avgRating > 4));
          }}
        >
          Top Rated Resturants
        </button>
        </div>
        <div className="m-4 p-4 flex items-center">
          <label>User Name: </label>
          <input className="border border-black p-2 m-2" value={loggedInUser} onChange={(e) => setUserName(e.target.value)}/>
        </div>
      </div>
      <div className="flex flex-wrap items-stretch">
        {listOfResturant.map((resturant) => (
          <Link className="custom-link" to={'/restaurants/'+resturant.info.id} key={resturant.info.id}>
          <ResturantCardPromoted resData={resturant}/>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
