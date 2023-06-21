import { useSelector } from "react-redux";
import { useState } from "react";
import { BsFillCartPlusFill } from "react-icons/bs";
import { Link } from "react-router-dom";

export const BrandLogo = () => {
  return <h1 className="bg-slate-950 text-white p-2">Food Wallah</h1>;
};

const Header = () => {
  const [isLogedIn, setIsLogedIn] = useState(false);

  const cartItems = useSelector((store) => store.cart);

  return (
    <div className="px-44 w-full h-24 text-xl flex justify-between items-center bg-black text-white shadow-lg">
      <BrandLogo />
      <ul className="flex w-1/3 justify-between">
        <li>
          <Link className="hover:text-orange-400" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="hover:text-orange-400" to="/about">
            about Us
          </Link>
        </li>
        {isLogedIn ? (
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
        )}
        <li>
          <Link className="flex" to="/cart">
            <BsFillCartPlusFill className="cart-icon" />
          </Link>
        </li>
        <li className="text-white">Cart-items-{cartItems.length}</li>
      </ul>
    </div>
  );
};

export default Header;
