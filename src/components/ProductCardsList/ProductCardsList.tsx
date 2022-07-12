import React from "react";

import "./ProductCardsList.scss";

import { IProduct } from "../../types/types";
import { ProductCard } from "../ProductCard/ProductCard";

interface IProductCardsListProps {
  products: IProduct[];
}

export const ProductCardsList: React.FC<IProductCardsListProps> = ({
  products,
}) => {
  return (
    <section className="products">
      <ul className="products__list">
        {products.map((product) => (
          <ProductCard key={product.name} product={product} />
        ))}
      </ul>
    </section>
  );
};
