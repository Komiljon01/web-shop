import React, { useState } from "react";
import SelectedProduct from "../components/selected-product";
import emptyImg from "../assets/empty-cart.svg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function cart() {
  const cards = useSelector((state) => state.cards);
  const totalQuantity = useSelector((state) => state.totalQuantity);
  const totalPrice = useSelector((state) => state.totalPrice);

  return (
    <div className="cart">
      <div className="container">
        {cards.length ? (
          <div className="cart__content">
            {cards.map((product) => (
              <SelectedProduct
                key={product.id}
                {...product}
                product={product}
              />
            ))}

            <h3 className="total-cost">
              TOTAL BEFORE SHIPPING:{" "}
              <span>
                {totalQuantity} products (&#36;{totalPrice.toFixed(1)})
              </span>
            </h3>
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
