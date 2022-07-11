import React from "react";
import { IProduct } from "../../types/types";

interface ICardProps {
  product: IProduct;
}

export const Card: React.FC<ICardProps> = ({ product }: ICardProps) => {
  return (
    <div>
      <h3>{product.name}</h3>
    </div>
  );
};
