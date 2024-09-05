import { useCallback, useEffect, useState } from "react";
import Card from "../components/card";
import Loader from "../components/loader";

function Home() {
  const [data, setData] = useState(null);
  const [loader, setLoader] = useState(true);

  const getData = useCallback(async () => {
    try {
      setLoader(true);
      const response = await fetch("https://fakestoreapi.com/products?limit=4");

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
    <section className="home">
      <div className="container">
        {data ? (
          <div className="home__content">
            <h1 className="home__title">Shop Latest Season</h1>
            <p className="home__text">Featured Products:</p>

            <div className="home__cards">
              {data.map((product) => (
                <Card key={product.id} {...product} />
              ))}
            </div>
          </div>
        ) : (
          <Loader />
        )}
      </div>
    </section>
  );
}

export default Home;
