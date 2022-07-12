import React from "react";

interface IProductColorsProps {
  colors: string[];
}

export const ProductColors: React.FC<IProductColorsProps> = ({ colors }) => {
  console.log(colors);

  return (
    <ul className="products-info__colors colors">
      {colors.map((color, i) => (
        <li
          className="colors__item"
          style={{ background: color[0] === "#" ? color : `#${color}` }}
          key={i}
        ></li>
      ))}
    </ul>
  );
};
