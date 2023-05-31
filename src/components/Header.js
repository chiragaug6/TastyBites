export const BrandLogo = () => {
  return <h1>FoodVilla</h1>;
};

const Header = () => {
  return (
    <div className="navbar">
      <BrandLogo />
      <ul className="nav-links" style={{ listStyleType: "none" }}>
        <li>Home</li>
        <li>about Us</li>
        <li>Contact US</li>
        <li>
          <i className="fa-solid fa-cart-shopping"></i>
        </li>
      </ul>
    </div>
  );
};

export default Header;
