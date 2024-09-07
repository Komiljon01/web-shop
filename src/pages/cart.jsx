import React, { useState } from "react";
import SelectedProduct from "../components/selected-product";
import emptyImg from "../assets/empty-cart.svg";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { cancelOrders } from "../actions";
import { toast } from "react-toastify";

function cart() {
  const cards = useSelector((state) => state.cards);
  const totalQuantity = useSelector((state) => state.totalQuantity);
  const totalPrice = useSelector((state) => state.totalPrice);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleOrderBtn = (text) => {
    dispatch(cancelOrders());
    navigate("/products");
    toast.success(text, { autoClose: 3000 });
  };

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

            <div className="cart__content-footer">
              <h3>
                TOTAL BEFORE SHIPPING:{" "}
                <span>
                  {totalQuantity} products (&#36;{totalPrice.toFixed(1)})
                </span>
              </h3>

              <div className="cart__content-footer_btns">
                <button
                  className="cancel-order"
                  onClick={() =>
                    handleOrderBtn("You successfully canceled the orders")
                  }
                >
                  Cancel
                </button>
                <button
                  className="buy-order"
                  onClick={() =>
                    handleOrderBtn(
                      "Your order was successful! Check your email—we've sent you the details."
                    )
                  }
                >
                  Buy
                </button>
              </div>
            </div>
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
