import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

function Navbar() {
  const cards = useSelector((state) => state.cards);
  const totalQuantity = useSelector((state) => state.totalQuantity);

  return (
    <section className="navbar">
      <div className="container">
        <div className="navbar__lists">
          <NavLink to="">Home</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="cart">
            Cart {cards.length > 0 && `(${totalQuantity})`}
          </NavLink>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
