import React from "react";
import { productCard } from "../../data";
import ProductCard from "./ProductCard.jsx";

export default function HeaderShopMenu({ isHovered, onHover, onLeave }) {
  let qantity = window.innerWidth > 1220 ? 3 : 2;
  
  return (
    <div
      className={`header__shop-menu ${isHovered ? "show" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="list">
        <ul>
          <li>
            <a href="">Автоаксесуари</a>
          </li>
          <li>
            <a href="">Оливи моторні</a>
          </li>
          <li>
            <a href="">Автоелектроніка</a>
          </li>
          <li>
            <a href="">Догляд за авто</a>
          </li>
          <li>
            <a href="">Автозапчастини</a>
          </li>
          <li>
            <a href="">Рідини омивача скла</a>
          </li>
        </ul>
      </div>
      <div className="cards">
        <span></span>
        {}
        {productCard.slice(0, qantity).map((product) => (
          <ProductCard
            key={product.id}
            img={product.img1}
            name={product.name}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </div>
  );
}
