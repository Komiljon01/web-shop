import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <section className="navbar">
      <div className="container">
        <div className="navbar__lists">
          <NavLink to="">Home</NavLink>
          <NavLink to="products">Products</NavLink>
          <NavLink to="cart">Cart</NavLink>
        </div>
      </div>
    </section>
  );
}

export default Navbar;
