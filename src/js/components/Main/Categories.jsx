import React from "react";

export default function Categories({ image, name }) {
  return (
    <div className="category">
      <img src={image} alt="" className="category__image" />
      <div className="category__name">
        <img src="@img/before.png" alt="" className="category__before" />
        <h4>{name}</h4>
      </div>
    </div>
  );
}
