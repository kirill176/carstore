import React from "react";
import { accessories } from "../../data";

export default function Accessories({ title, text }) {
  return (
    <div className="accessories__card">
      <div className="accessories__text">
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </div>
  );
}
