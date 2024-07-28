import { LOGO_URL } from "../utils/constants";
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
      <div className="header">
        <div className="logo-container">
          <img
            className="logo"
            src={LOGO_URL}
          ></img>
        </div>
        <div className="nav-items">
          <ul>
            <li>Online status: {onlineStatus ? "🟢" : "🔴"}</li>
            <li><Link className="custom-link" to="/">Home</Link></li>
            <li><Link className="custom-link" to="/about">About Us</Link></li>
            <li><Link className="custom-link" to="/contact">Contact Us</Link></li>
            <li><Link className="custom-link" to="/grocery">Grocery</Link></li>
            <li><a>Cart</a></li>
            <button className="login" onClick={() => {btnName == "Login" ? setBtnName("Logout") : setBtnName("Login")}}>{btnName}</button>
          </ul>
        </div>
      </div>
    );
};


export default Header;