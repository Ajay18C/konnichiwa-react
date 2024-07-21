import ResturantCard from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import resObj from '../utils/mockData'

const Body = () => {
  // Local State variable - Super powerful variable
  const [listOfResturant,setListOfResturant] = useState([]);
  const [searchText,setSearchText] = useState("");

  const fetchData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=21.99740&lng=79.00110&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    console.log(json);
    console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    setListOfResturant(resObj);
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
            setListOfResturant(resObj.filter((res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())))
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
          <ResturantCard key={resturant.info.id} resData={resturant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
