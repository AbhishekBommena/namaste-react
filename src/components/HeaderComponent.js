import { LOGO_URL } from "../utils/constants";

const HeaderComponent = () => {
  return (
    <div className="headerContainer">
      <div className="logoContainer">
        <img src={LOGO_URL} className="logo" />
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
    </div>
  );
};
export default HeaderComponent;