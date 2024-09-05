import { Link } from "react-router-dom";

function Card({ title, price, image, id }) {
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
        <input type="number" min={1} defaultValue={1} />
        <button>Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
