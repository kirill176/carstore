import React from "react";

export default function HeaderBuyersMenu({isHovered, onHover, onLeave}) {
  return (
    <div
      className={`header__buyers-menu ${isHovered ? "bshow" : ""}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="list">
        <ul>
          <li>
            <a href="">Про нас</a>
          </li>
          <li>
            <a href="">Доставка і оплата</a>
          </li>
        </ul>
      </div>
    </div>
  );
}
