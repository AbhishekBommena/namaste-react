import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import ShimmerComp from "./ShimmerComp";

const HeaderComponent = () => {
  const [login_out,setLogin_out] = useState("Login");
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        {LOGO_URL ? <img src={LOGO_URL} className="logo" /> : <ShimmerComp/> }
        <p className="companyName">Cwiggy</p>
      </div>
      <div className="navContainer">
        <a href="#" className="navItems">
          Home
        </a>
        <a href="#" className="navItems">
          About Us
        </a>
        <a href="#" className="navItems">
          Help
        </a>
        <a href="#" className="navItems">
          Cart
        </a>
      </div>
      <button className="login-logout" onClick={() => setLogin_out(login_out === "Login" ? "Logout" : "Login")}>{login_out}</button>
    </div>
  );
};
export default HeaderComponent;