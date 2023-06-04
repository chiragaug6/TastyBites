import { useState } from "react";

export const BrandLogo = () => {
  return <h1>FoodVilla</h1>;
};

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <div className="navbar">
      <BrandLogo />
      <ul className="nav-links" style={{ listStyleType: "none" }}>
        <li>Home</li>
        <li>about Us</li>
        <li>Contact US</li>
        <li>
          <i className="fa-solid fa-cart"></i>
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
        <button className="login-logout-btn" onClick={() => setIsLogedIn(true)}>
          Login
        </button>
      )}
    </div>
  );
};

export default Header;
