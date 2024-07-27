import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import resObj from '../utils/mockData'
import { BODY_API } from "../utils/constants";
import { Link } from "react-router-dom";

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

  if(listOfResturant.length === 0){
    return <Shimmer/>
  }

  console.log("Body Rendered");

  // Normal js variable
  // let listOfResturant = resObj;

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input type="text" className="search-box" value={searchText} onChange={(e) => {setSearchText(e.target.value)}}/>
          <button onClick={() =>{
            setListOfResturant(filterListOfResturant.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())))
          }}>Search</button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            setListOfResturant(listOfResturant.filter((x) => x.info.avgRating > 4));
          }}
        >
          Top Rated Resturants
        </button>
      </div>
      <div className="res-container">
        {listOfResturant.map((resturant) => (
          <Link className="custom-link" to={'/restaurants/'+resturant.info.id} key={resturant.info.id}>
          <ResturantCard resData={resturant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
