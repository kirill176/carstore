import React from "react";

export default function ProductCard({ img, name, price, id }) {
  const handleClick = () => {
    document.cookie = `id=${id}`;
  };
  return (
    <a href="./product.html" onClick={() => handleClick()}>
      <div className="product-card">
        <img src={img} alt="" />
        <h3>{name}</h3>
        <h6>{price} ₴/шт</h6>
      </div>
    </a>
  );
}
