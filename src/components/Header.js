import { LOGO_URL } from "../utils/constants";
import logo from '../assets/logo.png'
import {useState,useEffect} from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Header = () => {
  let [btnName,setBtnName] = useState("Login");
  console.log("Header render");
  const onlineStatus = useOnlineStatus();

  // If not deps array it will be called on every render
  // If deps array is empty  => useEffect will called only initial render and just once
  // If deps array is [btnName] => useEffect will called every time btnName gets updated
  useEffect(() => {
    console.log("Use Effect Header");
  },[btnName])
    return (
      <div className="flex justify-between bg-orange-300">
        <div className="logo-container">
          <img
            className="w-44"
            src={logo}
          ></img>
        </div>
        <div className="flex items-center">
          <ul className="flex p-4 m-4">
            <li className="px-4 mx-4 bg-orange-200 rounded-xl"> Online {onlineStatus ? "🟢" : "🔴"}</li>
            <li className="px-4 mx-4 bg-orange-200 rounded-xl hover:bg-orange-50"><Link className="custom-link" to="/">Home</Link></li>
            <li className="px-4 mx-4 bg-orange-200 rounded-xl hover:bg-orange-50"><Link className="custom-link" to="/about">About Us</Link></li>
            <li className="px-4 mx-4 bg-orange-200 rounded-xl hover:bg-orange-50"><Link className="custom-link" to="/contact">Contact Us</Link></li>
            <li className="px-4 mx-4 bg-orange-200 rounded-xl hover:bg-orange-50"><Link className="custom-link" to="/grocery">Grocery</Link></li>
            <li className="px-4 mx-4 bg-orange-200 rounded-xl hover:bg-orange-50"><a>Cart</a></li>
            <button className="px-4 mx-4 bg-orange-200 rounded-xl hover:bg-orange-50" onClick={() => {btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
};


export default Header;