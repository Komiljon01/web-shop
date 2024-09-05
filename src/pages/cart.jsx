import React, { useState } from "react";
import SelectedProduct from "../components/selected-product";
import emptyImg from "../assets/empty-cart.svg";
import { Link } from "react-router-dom";

function cart() {
  const [data, setData] = useState([]);
  return (
    <div className="cart">
      <div className="container">
        {data.length ? (
          <div className="cart__content">
            {data.map((product) => (
              <SelectedProduct key={product.id} {...product} />
            ))}
          </div>
        ) : (
          <div className="cart__empty">
            <img src={emptyImg} alt="your cart is empty" />
            <p>No Items in Cart!</p>
            <Link to="/products">Go Products</Link>
          </div>
        )}
      </div>
    </div>
  );
}

export default cart;
