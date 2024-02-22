import React from "react";
import ProductCards from "./ProductCards.jsx";
import { productCard } from "../../data.js";

export default function SalesLider() {
  return (
    <div className="sales-lider">
      <div className="sales-lider__title">
        <h2>Лідери продажу</h2>
      </div>
      <div className="sales-lider__slider">
        {productCard.map((product, index) => (
          <ProductCards key = {index} img = {product.img1} title = {product.name} price = {product.price} id={product.id}/>
        ))}
      </div>
    </div>
  );
}
