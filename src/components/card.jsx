import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addItem } from "../actions";

function Card({ product }) {
  const [count, setCount] = useState(1);
  const dispatch = useDispatch();
  const { title, price, image, id } = product;

  return (
    <div className="card">
      <Link to={`/products/${id}`}>
        <div className="card__img">
          <img src={image} alt={title} />
        </div>
        <div className="card__body">
          <p>{title}</p>
          <p>&#36;{price}</p>
        </div>
      </Link>
      <div className="card__footer">
        <input
          type="number"
          min={1}
          defaultValue={count}
          onChange={(e) => setCount(Number(e.target.value))}
        />
        <button onClick={() => dispatch(addItem(product, count))}>
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default Card;
