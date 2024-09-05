import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";

function SelectedProduct({ title, price, image }) {
  return (
    <div className="selectedProduct">
      <div className="selectedProduct__info">
        <img src={image} alt={title} width={100} />
        <p>{title}</p>
      </div>
      <div className="selectedProduct__controls">
        <p>&#36;{price}</p>
        <div className="selectedProduct__controls-btns">
          <button className="selectedProduct-add">-</button>
          <input type="number" defaultValue={1} />
          <button className="selectedProduct-delete">+</button>
        </div>
        <IoTrashBinSharp className="trash" />
        <p>&#36;1000</p>
      </div>
    </div>
  );
}

export default SelectedProduct;
