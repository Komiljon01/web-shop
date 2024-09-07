import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../components/loader";
import { useDispatch } from "react-redux";
import { addItem } from "../actions";

function Product() {
  const { pathname } = useLocation();
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const dispatch = useDispatch();

  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const response = await fetch(`https://fakestoreapi.com${pathname}`);

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const result = await response.json();

      setData(result);
      setLoader(false);
    } catch (error) {
      throw new Error(error);
    }
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  return (
    <section className="product">
      <div className="container">
        {data ? (
          <div className="product__info">
            <div className="product__info-img">
              <img src={data.image} alt={data.title} />
            </div>
            <div className="product__info-content">
              <h3>{data.title}</h3>
              <p>{data.description}</p>

              <div className="product__info-content_footer">
                <p>&#36;{data.price}</p>

                <div className="product__controls">
                  <input
                    type="number"
                    min={1}
                    value={quantity}
                    onChange={(e) => setQuantity(Number(e.target.value))}
                  />
                  <button onClick={() => dispatch(addItem(data, quantity))}>
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
}

export default Product;
