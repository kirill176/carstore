import React, { useEffect, useState } from "react";
import { productCard } from "../../data";

export default function ShopProductCard({
  img,
  name,
  price,
  id,
  onShopQuantity,
}) {
  const [hover, setHover] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const windowWidthUpdate = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", windowWidthUpdate);

    return () => {
      window.removeEventListener("resize", windowWidthUpdate);
    };
  }, [windowWidth]);

  const handleOn = () => {
    setHover(true);
  };

  const handleOf = () => {
    setHover(false);
  };

  const handleClick = () => {
    document.cookie = `id=${id}`;
  };

  const buyClick = (event) => {
    event.stopPropagation();
    const product = productCard.find((item) => item.id == id);
    product.shoppingCartQuantity < 1
      ? (product.shoppingCartQuantity = 1)
      : null;
  };

  window.addEventListener("resize", () => {});

  return (
    <div className="shop__card" onMouseEnter={handleOn} onMouseLeave={handleOf}>
      <a href="./product.html" onClick={() => handleClick()}>
        <div className="shop__card-image">
          <img src={img} alt="" />
        </div>
        <div className="shop__card-title">
          <h6>{name}</h6>
        </div>
        <div className="shop__card-price">
          <p>{price} ₴/шт</p>
        </div>
      </a>
      {hover && windowWidth >= 740 && (
        <div className="shop__card-button">
          <button onClick={buyClick}>Придбати</button>
        </div>
      )}
      {windowWidth <= 740 && (
        <div className="shop__card-button">
          <button onClick={buyClick}>Придбати</button>
        </div>
      )}
    </div>
  );
}
