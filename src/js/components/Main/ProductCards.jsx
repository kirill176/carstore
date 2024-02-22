import React, { useState } from "react";

export default function ProductCards({ img, title, price, id }) {
  const [hovered, setHovered] = useState(false);
  const handleClick = () => {
    document.cookie = `id=${id}`;
  };
  return (
    <a href="./product.html" onClick={() => handleClick()}>
      <div
        className="product"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <div className="product__content">
          <div className="product__img">
            <img data-lazy={img} alt="" />
          </div>
          <div className="product__title">
            <h3>{title}</h3>
          </div>
          <div className="product__price">
            <h6>{price} ₴/шт</h6>
          </div>
          {hovered && <button className="product__button">Придбати</button>}
        </div>
      </div>
    </a>
  );
}
