import { useCallback, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Loader from "../components/loader";

function Product() {
  const { pathname } = useLocation();
  console.log(pathname);

  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const response = await fetch(`https://fakestoreapi.com${pathname}`);

      if (!response.ok) {
        throw new Error(`Could not fetch ${url}, status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);

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
                  <input type="number" min={1} defaultValue={1} />
                  <button>Add to Cart</button>
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
