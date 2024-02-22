import React from "react";

export default function HeaderContent({
  isHovered,
  onHover,
  onLeave,
  buyer,
  bHover,
  bLeave,
  searchShow,
  shoppingCartClick,
}) {
  return (
    <div className="header__content">
      <div className="header__logo">
        <a href="./index.html">
          <img src="@img/logo.svg" alt="logo" />
        </a>
      </div>
      <div className="header__list">
        <ul>
          <li>
            <a href="./index.html" className="link active">
              Головна
            </a>
          </li>
          <li
            onMouseEnter={onHover}
            onMouseLeave={onLeave}
            className={`${isHovered ? "shown" : ""}`}
          >
            <a
              href="./shop.html"
              className={`"link" ${isHovered ? "active" : ""}`}
            >
              Магазин
            </a>
          </li>
          <li>
            <a href="" className="link">
              Блог
            </a>
          </li>
          <li
            onMouseEnter={bHover}
            onMouseLeave={bLeave}
            className={`${buyer ? "shown" : ""}`}
          >
            <a href="" className="link">
              Покупцям
            </a>
          </li>
          <li>
            <a href="" className="link">
              Контакти
            </a>
          </li>
        </ul>
      </div>
      <div className="header__search">
        <img src="@img/search.svg" alt="" onClick={searchShow} />
      </div>
      <div className="header__shoping-cart" onClick={shoppingCartClick}>
        <img src="@img/shopping-cart.svg" alt="" />
      </div>
    </div>
  );
}
