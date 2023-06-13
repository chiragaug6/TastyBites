import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

export const BrandLogo = () => {
  return <h1 className="bg-slate-950 text-white p-2">Food Wallah</h1>;
};

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  return (
    <div className="px-44 w-full h-24 text-xl flex justify-between items-center bg-yellow-300 fixed shadow-lg">
      <BrandLogo />
      <ul className="flex w-1/3 justify-between">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">about Us</Link>
        </li>
        {isLogedIn ? (
          <li>
            <button
              className="login-logout-btn"
              onClick={() => setIsLogedIn(false)}
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login">
              <button
                className="login-logout-btn"
                onClick={() => setIsLogedIn(true)}
              >
                Sign In
              </button>
            </Link>
          </li>
        )}
        <li className="cart-icon">
          <BsFillCartPlusFill className="cart-icon" />
        </li>
      </ul>
    </div>
  );
};

export default Header;
