import { useSelector } from "react-redux";
import { useState } from "react";
import { Link } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";

export const BrandLogo = () => {
  return (
    <Link to="/">
      <h1 className="bg-white rounded-full font-bold text-black p-2">
        TastyBites
      </h1>
    </Link>
  );
};

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart);

  return (
    <div className="px-44 w-full h-24 text-xl flex justify-between items-center bg-red-500 text-white shadow-lg font-Poppins xl:text-lg xl:px-24 lg:text-base lg:px-11 md:px-6 sm:px-1">
      <BrandLogo />
      <ul className="flex w-1/3 justify-between xl:w-1/2 lg:w-2/3">
        <li>
          <Link className="text-red-200 hover:text-white" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text-red-200 hover:text-white" to="/about">
            About Project
          </Link>
        </li>
        {/* {isLogedIn ? (
          <li>
            <button
              className="hover:text-orange-400"
              onClick={() => setIsLogedIn(false)}
            >
              Logout
            </button>
          </li>
        ) : (
          <li>
            <Link to="/login">
              <button
                className="hover:text-orange-400"
                onClick={() => setIsLogedIn(true)}
              >
                Sign In
              </button>
            </Link>
          </li>
        )} */}
        <li>
          <Link className="flex" to="/cart">
            <FaShoppingCart />
            <span className="w-5 h-5 bg-orange-500 rounded-full flex items-center justify-center text-base text-red-200 relative top-[-8] right-1">
              {cartItems.length}
            </span>
          </Link>
        </li>
        {/* <li className="text-white font-mono">CART-{cartItems.length}</li> */}
      </ul>
    </div>
  );
};

export default Header;
