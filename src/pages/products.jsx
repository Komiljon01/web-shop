import { useCallback, useEffect, useState } from "react";
import Loader from "../components/loader";
import Card from "../components/card";

function Products() {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const response = await fetch("https://fakestoreapi.com/products");

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
    <div className="products">
      {data ? (
        <div className="products__cards">
          {data.map((product) => (
            <Card key={product.id} product={product} />
          ))}
        </div>
      ) : (
        <Loader />
      )}
    </div>
  );
}

export default Products;
