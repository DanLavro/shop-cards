import React from "react";

import "./ProductCard.scss";

import { IProduct } from "../../types/types";

interface IProductCardProps {
  product: IProduct;
}

export const ProductCard: React.FC<IProductCardProps> = ({
  product,
}: IProductCardProps) => {
  return (
    <a href="#" className="products__item">
      <img
        src={product.image_url}
        alt={product.name}
        className="products__img"
      ></img>
      {product.coming_soon && (
        <span className="products__expected expected">coming soon</span>
      )}

      <div
        className={`products__info products-info ${
          product.colors.length === 0 && "products-info_disabled"
        }`}
      >
        {product.colors.length > 0 && (
          <ul className="products-info__colors colors">
            {product.colors.map((color) => (
              <li
                className="colors__item"
                style={{ background: color }}
                key={color}
              ></li>
            ))}
          </ul>
        )}

        <div className="products-info__description">
          <div className="products-info__main products-info__main_sold">
            <h3 className="products-info__header">{product.name}</h3>
            <span className="products-info__price">{product.price}</span>
          </div>

          {product.sold ? (
            <span className="products-info__sold">sold out</span>
          ) : (
            <ul className="products-info__sizes">
              {product.sizes.map((size) => (
                <li className="products-info__size" key={size}>
                  {size}
                </li>
              ))}
            </ul>
          )}
        </div>
      </div>
    </a>
  );
};