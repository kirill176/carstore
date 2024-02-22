import React, { useEffect, useState } from "react";
import { productCard } from "../../data";

export default function ProductContent() {
  const [description, setDescription] = useState(false);
  const [characteristic, setCharacteristic] = useState(false);
  const [value, setValue] = useState(1);

  const id = document.cookie
    .split("; ")
    .find((row) => row.startsWith("id="))
    .split("=")[1];

  const product = productCard.find((item) => item.id == id);

  const characteristicksContent = product.characteristicks.props.children;
  const lines = React.Children.toArray(characteristicksContent).filter(
    (item) => typeof item === "string"
  );

  console.log(product);

  const numberOfLines = lines.length;

  const chheight = numberOfLines * 35 + 100;

  const handleClick = () => {
    setDescription((prev) => !prev);
  };

  const characteristicClick = () => {
    setCharacteristic((prev) => !prev);
  };

  const addToCart = () => {
    product.shoppingCartQuantity = value;
  };

  const plusClick = () => {
    const newValue = value + 1;
    setValue(newValue);
  };

  const minusClick = () => {
    if (value > 1) {
      const newValue = value - 1;
      setValue(newValue);
    }
  };

  const height = product.description.split("\n").length * 75 + 75;

  return (
    <div className="product">
      <div className="sliders">
        {product.img2 && (
          <div className="product-slider">
            <div className="product-slider__item">
              <img data-lazy={product.img1} alt="" />
            </div>
            <div className="product-slider__item">
              <img data-lazy={product.img2} alt="" />
            </div>
            {product.img3 && (
              <div className="product-slider__item">
                <img data-lazy={product.img3} alt="" />
              </div>
            )}
            {product.img4 && (
              <div className="product-slider__item">
                <img data-lazy={product.img4} alt="" />
              </div>
            )}
          </div>
        )}
        <div className="product__image">
          <div className="image-item">
            <img src={product.img1} alt="" />
          </div>
          {product.img2 && (
            <div className="image-item">
              <img data-lazy={product.img2} alt="" />
            </div>
          )}
          {product.img3 && (
            <div className="image-item">
              <img data-lazy={product.img3} alt="" />
            </div>
          )}
          {product.img4 && (
            <div className="image-item">
              <img data-lazy={product.img4} alt="" />
            </div>
          )}
        </div>
      </div>
      <div className="product__details">
        <div className="product__title">
          <h1>{product.name}</h1>
        </div>
        <div className="product__id">
          <p>
            Артикул: <strong>{product.id}</strong>
          </p>
        </div>
        <div className="product__manufacturer">
          <h6>Виробник :</h6>
          <span>{product.manufacturer}</span>
        </div>
        <div className="product__price">
          <p>{product.price} ₴/шт</p>
        </div>

        <div className="product__buttons">
          <div className="product__input">
            <a
              href="#"
              className={`minus ${value == 1 ? "minus__disabled" : ""}`}
              onClick={minusClick}
            ></a>
            <input
              type="number"
              min={1}
              value={value}
              onChange={(event) => setValue(event.target.value)}
            />
            <a href="#" className="plus" onClick={plusClick}></a>
          </div>
          <button onClick={addToCart}>Придбати</button>
        </div>
        <div
          className={`product__description ${
            description ? "description-show" : ""
          }`}
          style={description ? { maxHeight: `${height}px` } : null}
        >
          <h4
            className={` ${description ? "clicked" : ""}`}
            onClick={handleClick}
          >
            Короткий опис
          </h4>
          <p>{product.description}</p>
        </div>
        <div
          className={`product__characteristics ${
            description ? "characteristics-show" : ""
          }`}
          style={characteristic ? { maxHeight: `${chheight}px` } : null}
        >
          <h4
            className={` ${characteristic ? "clicked" : ""}`}
            onClick={characteristicClick}
          >
            Характеристики
          </h4>
          <p>{product.characteristicks}</p>
        </div>
      </div>
    </div>
  );
}
