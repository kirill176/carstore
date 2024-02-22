import React, { useState } from "react";
import ShoppingCartProduct from "./ShoppingCartProduct.jsx";
import { productCard } from "../../data.js";

export default function HeaderShopingCart({
  shoppingCartShow,
  shoppingCartClick,
}) {
  const [product, setProduct] = useState(productCard);
  let cost = 0;
  const onQuantityChange = (index, newQuantity) => {
    const updateProductCard = [...productCard];
    updateProductCard[index].shoppingCartQuantity = newQuantity;
    setProduct(updateProductCard);
  };

  return (
    <div
      className={`header__shoping-card ${
        shoppingCartShow ? "shopping-card-show" : ""
      }`}
    >
      <div className="title">
        <div className="title__text">
          <h4>Кошик</h4>
          <span onClick={shoppingCartClick}></span>
        </div>
      </div>
      <div className="products">
        {productCard.map(
          (product, index) =>
            product.shoppingCartQuantity > 0 && (
              <ShoppingCartProduct
                key={index}
                img={product.img1}
                name={product.name}
                price={product.price}
                shoppingCartQuantity={product.shoppingCartQuantity}
                onQuantityChange={onQuantityChange}
                index={index}
              />
            )
        )}
      </div>
      <div className="shoping-buttons">
        <p>Вартість доставки</p>
        <div className="cost">
          <h5>Загалом</h5>
          <h5>
            {productCard
              .filter((product) => product.shoppingCartQuantity > 0)
              .map((product) => {
                const productCost =
                  product.shoppingCartQuantity * product.price;
                cost += productCost;
                return null; // или что-то другое, если нужно вернуть JSX для каждого элемента массива
              })}
            {cost} ₴
          </h5>
        </div>
        <div className="buttons">
          <button className="checkout">Оформити</button>
          <button className="express-checkout">Оформити в 1 клік</button>
          <button className="continue-shopping">Продовжити покупки</button>
        </div>
      </div>
    </div>
  );
}
