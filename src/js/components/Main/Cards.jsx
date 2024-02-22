import React from "react";

export default function Card({ number, title, image, text }) {
  return (
    <div className="card">
      <div className="card__content">
        <div className="card__number">
          <p>{number}</p>
        </div>
        <div className="card__title">
          <h5>{title}</h5>
          <img src={image} alt="" />
        </div>
        <div className="card__text">
          <p>{text}</p>
        </div>
        <div className="card__button">
          <a href="./shop.html">
            <button>До магазину</button>
          </a>
        </div>
      </div>
    </div>
  );
}
