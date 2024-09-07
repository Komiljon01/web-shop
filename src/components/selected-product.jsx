import React from "react";
import { IoTrashBinSharp } from "react-icons/io5";
import { useDispatch } from "react-redux";
import { decr, deleteItem, inc, updateQuantity } from "../actions";
import { Link } from "react-router-dom";

function SelectedProduct({ product }) {
  const { title, price, image, quantity, id } = product;
  const dispatch = useDispatch();

  const handleINC = () => dispatch(inc(id));

  const handleDECR = () => {
    if (quantity > 1) {
      dispatch(decr(id));
    } else {
      dispatch(deleteItem(id));
    }
  };

  const handleInputChange = (e) => {
    const value = +e.target.value;
    if (value >= 1) {
      dispatch(updateQuantity({ id, quantity: value }));
    }
  };

  return (
    <div className="selectedProduct">
      <Link to={`/products/${id}`} className="selectedProduct__info">
        <img src={image} alt={title} width={100} />
        <p>{title}</p>
      </Link>
      <div className="selectedProduct__controls">
        <p>&#36;{price}</p>
        <div className="selectedProduct__controls-btns">
          <button className="selectedProduct-delete" onClick={handleDECR}>
            -
          </button>
          <input
            type="number"
            value={quantity}
            onChange={handleInputChange}
            min={1}
          />
          <button className="selectedProduct-add" onClick={handleINC}>
            +
          </button>
        </div>
        <IoTrashBinSharp
          className="trash"
          onClick={() => dispatch(deleteItem(id))}
        />
        <p>&#36;{(price * quantity).toFixed(2)}</p>
      </div>
    </div>
  );
}

export default SelectedProduct;
