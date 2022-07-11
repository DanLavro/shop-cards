import React from "react";
import { IProduct } from "../../types/types";
import { Card } from "../Card/Card";

interface ICardListProps {
  products: IProduct[];
}

export const CardList: React.FC<ICardListProps> = ({ products }) => {
  return (
    <div>
      {products.map((product) => (
        <Card key={product.name} product={product} />
      ))}
    </div>
  );
};
