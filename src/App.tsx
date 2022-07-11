import React, { useEffect, useState } from "react";
import "./App.css";
import { CardList } from "./components/CardList/CardList";

import { IProduct, IProducts } from "./types/types";

const JSONdata = [
  {
    name: "La robe Draggiu",
    price: "1950 EUR",
    coming_soon: true,
    image_url:
      "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw409ab3d0/22H223DR017-1107-1CT_1_main.jpg?sw=475&sh=633&q=100",
    sizes: [],
    colors: [],
    sold: true,
  },
  {
    name: "La veste Baccala",
    price: "840 EUR",
    coming_soon: false,
    image_url:
      "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw0dac8821/22H223JA021-1075-100_4.jpg?sw=475&sh=633&q=100",
    sizes: [32, 34, 36, 38, 40, 42, 44, 46],
    colors: ["#ffffff", "#b3a25f", "#000000"],
    sold: false,
  },
  {
    name: "La jupe Notte",
    price: "515 EUR",
    coming_soon: false,
    image_url:
      "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw472e832a/22H213SK009-1000-110_2.jpg?sw=475&sh=633&q=100",
    sizes: [32, 34, 36, 38, 40, 42, 44, 46],
    colors: ["#ffffff", "#000000", "#ff70f8"],
    sold: false,
  },
  {
    name: "La jupe Baccala",
    price: "485 EUR",
    coming_soon: true,
    image_url:
      "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dwbac37040/22H223SK020-1075-100_1_main.jpg?sw=475&sh=633&q=100",
    sizes: [],
    colors: ["#ffffff", "#000000"],
    sold: true,
  },
  {
    name: "Le manteau Filu",
    price: "785 EUR",
    coming_soon: false,
    image_url:
      "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw5c0c7789/22H223CO019-1085-130_4.jpg?sw=475&sh=633&q=100",
    sizes: [32, 34, 36, 38, 40, 42, 44, 46],
    colors: ["#e6d6a8", "#5b3c11", "#ffffff"],
    sold: false,
  },
  {
    name: "Le pantalon Camargue",
    price: "575 EUR",
    coming_soon: false,
    image_url:
      "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw8c0fa9d2/22H223PA018-1059-130_1_main.jpg?sw=475&sh=633&q=100",
    sizes: [32, 34, 36, 38, 40, 42, 44],
    colors: ["#e6d6a8", "#5b3c11", "#ffffff", "#000000", "#ff70f8"],
    sold: false,
  },
  {
    name: "Le Chiquito moyen",
    price: "575 EUR",
    coming_soon: false,
    image_url:
      "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dwcdec1215/22H213BA002-3071-140_1_main.jpg?sw=475&sh=633&q=100",
    sizes: [],
    colors: [
      "#e6d6a8",
      "#b07ffa",
      "ffffff",
      "000000",
      "#ba7730",
      "#edb2dd",
      "#d6a94f",
      "000000",
      "ffffff",
      "#f7ff00",
      "#c9ebf5",
      "#9cc7e6",
      "000000",
      "#ff70f8",
    ],
    sold: false,
  },
  {
    name: "La robe Biasi",
    price: "825 EUR",
    coming_soon: true,
    image_url:
      "https://www.jacquemus.com/dw/image/v2/BJFJ_PRD/on/demandware.static/-/Sites-master-jacquemus/default/dw92ca21e8/22H223DR029-1086-110_1_main.jpg?sw=475&sh=633&q=100",
    sizes: [],
    colors: ["#ffffff"],
    sold: true,
  },
];

function App() {
  const [data, setData] = useState<IProducts>({
    products: [],
  });

  const [isLoading, setIsLoading] = useState<boolean>(true);

  async function fetchData() {
    try {
      setIsLoading(true);

      console.log(JSONdata);

      setData({ products: JSONdata });
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
          <CardList products={data.products} />
        )}
      </main>
    </div>
  );
}

export default App;
