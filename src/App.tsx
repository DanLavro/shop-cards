import React, { useEffect, useState } from "react";

import "./scss/style.scss";
import { ProductCardsList } from "./components/ProductCardsList/ProductCardsList";

import { IProduct } from "./types/types";

function App() {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchData() {
    try {
      setIsLoading(true);

      fetch("jacquemus-test-data.json")
        .then((res) => res.json())
        .then((res) => setProducts(res));
    } catch (err) {
      console.log(err);
    }
    setIsLoading(false);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
      <main className="main">
        {isLoading ? (
          <h2>Loading...</h2>
        ) : (
          <ProductCardsList products={products} />
        )}
      </main>
    </div>
  );
}

export default App;
