import React from "react";

interface IProductSizesProps {
  sizes: number[];
}

export const ProductSizes: React.FC<IProductSizesProps> = ({ sizes }) => {
  return (
    <ul className="products-info__sizes">
      {sizes.map((size) => (
        <li className="products-info__size" key={size}>
          {size}
        </li>
      ))}
    </ul>
  );
};
