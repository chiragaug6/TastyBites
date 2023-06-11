import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const BrandLogo = () => {
  return <h1>FoodVilla</h1>;
};

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <div className="navbar">
      <BrandLogo />
      <ul className="nav-links" style={{ listStyleType: "none" }}>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about Us</Link>
        </li>
        <li>
          <Link to="/contact">Contact US</Link>
        </li>
        <li className="cart-icon">
          <BsFillCartPlusFill className="cart-icon" />
        </li>
      </ul>
      {isLogedIn ? (
        <button
          className="login-logout-btn"
          onClick={() => setIsLogedIn(false)}
        >
          Logout
        </button>
      ) : (
        <Link to="/login">
          <button
            className="login-logout-btn"
            onClick={() => setIsLogedIn(true)}
          >
            Login
          </button>
        </Link>
      )}
    </div>
  );
};

export default Header;
