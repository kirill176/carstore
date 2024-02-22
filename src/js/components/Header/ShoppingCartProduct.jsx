import React, { useState } from "react";

export default function ShoppingCartProduct({
  img,
  name,
  price,
  shoppingCartQuantity,
  onQuantityChange,
  index,
}) {
  const [quantity, setQuantity] = useState(shoppingCartQuantity);

  const handleQuantityChange = (event) => {
    const newValue = parseInt(event.target.value);
    setQuantity(newValue);
    onQuantityChange(index, newValue);
  };

  const plusClick = () => {
    const newValue = quantity + 1;
    setQuantity(newValue);
    onQuantityChange(index, newValue);
  };

  const minusClick = () => {
    if (quantity > 1) {
      const newValue = quantity - 1;
      setQuantity(newValue);
      onQuantityChange(index, newValue);
    }
  };

  return (
    <div className="cart-product">
      <div className="cart-product__image">
        <img src={img} alt="" />
      </div>
      <div className="cart-product__content">
        <div className="cart-product__title">
          <h6>{name}</h6>
        </div>
        <div className="flex-box">
          <div className="cart-product__text">
            <p>{price} ₴/шт</p>
            <a href="">Видалити</a>
          </div>
          <div className="cart-product__input">
            <a
              href="#"
              className={`minus ${
                shoppingCartQuantity == 1 ? "minus__disabled" : ""
              }`}
              onClick={minusClick}
            ></a>
            <input
              type="number"
              min={1}
              max={100}
              onChange={handleQuantityChange}
              value={shoppingCartQuantity}
            />
            <a href="#" className="plus" onClick={plusClick}></a>
          </div>
        </div>
      </div>
    </div>
  );
}
