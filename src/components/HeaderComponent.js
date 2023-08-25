import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import ShimmerComp from "./ShimmerComp";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  const [login_out,setLogin_out] = useState("Login");
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        {LOGO_URL ? <img src={LOGO_URL} className="logo" /> : <ShimmerComp/> }
        <p className="companyName">Cwiggy</p>
      </div>
      <div className="navContainer">
        <p className="navItems">
          <Link to="/">Home</Link>
        </p>
        <p className="navItems">
          <Link to="/about">About Us</Link>
        </p>
        <p className="navItems">
          <Link to="/contactus">Contact Us</Link>
        </p>
        <p className="navItems">
          <Link to="/cart">Cart</Link>
        </p>
      </div>
      <button className="login-logout" onClick={() => setLogin_out(login_out === "Login" ? "Logout" : "Login")}>{login_out}</button>
    </div>
  );
};
export default HeaderComponent;