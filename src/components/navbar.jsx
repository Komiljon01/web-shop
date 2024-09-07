import { FaCartShopping } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const cards = useSelector((state) => state.cards);
  const totalQuantity = useSelector((state) => state.totalQuantity);

  return (
    <nav className="navbar">
      <div className="container">
        <div className="navbar__lists">
          <NavLink to="">Home</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="cart">
            <FaCartShopping />
            {cards.length > 0 && `(${totalQuantity})`}
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
