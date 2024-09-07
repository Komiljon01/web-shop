import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { decr, inc } from "../actions";

function SelectedProduct({ product }) {
  const { title, price, image, quantity } = product;

  return (
    <div className="selectedProduct">
      <div className="selectedProduct__info">
        <img src={image} alt={title} width={100} />
        <p>{title}</p>
      </div>
      <div className="selectedProduct__controls">
        <p>&#36;{price}</p>
        <div className="selectedProduct__controls-btns">
          <button
            className="selectedProduct-add"
            onClick={() => useDispatch(decr())}
          >
            -
          </button>
          <input type="number" defaultValue={quantity} />
          <button
            className="selectedProduct-delete"
            onClick={() => useDispatch(inc())}
          >
            +
          </button>
        </div>
        <IoTrashBinSharp className="trash" />
        <p>&#36;{price * quantity}</p>
      </div>
    </div>
  );
}

export default SelectedProduct;
