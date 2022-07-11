import React, { useEffect, useState } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";

import { IProduct } from "./types/types";

function App() {
  const [data, setData] = useState<IProduct[]>([]);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchData() {
    try {
      setIsLoading(true);

      fetch("jacquemus-test-data.json")
        .then((res) => res.json())
        .then((res) => setData(res));
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
        {isLoading ? <h2>Loading...</h2> : <CardList products={data} />}
      </main>
    </div>
  );
}

export default App;
