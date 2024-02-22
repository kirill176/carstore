import React, { useState } from "react";
import { svgicon } from "../../data";

export default function HeaderIcons({menuClick, menu}) {
  return (
    <div className="header__icons">
      <div className={`burger ${menu ? "burger__active" : ""}`} onClick={menuClick}>
        <span />
      </div>
      <div className="work-time">
        {svgicon[7].svg}
        <p>ПН-СБ - 10:00 - 19:00</p>
      </div>
      <div className="email">
        <a href="">
          {svgicon[6].svg}
          <p>support@mail.com</p>
        </a>
      </div>
      <div className="language-change">
        <a href="" className="active">
          Ua
        </a>
        <p>|</p>
        <a href="">En</a>
      </div>
      <div className="social-media">
        <a href="" className="link">
          {svgicon[0].svg}
        </a>
        <a href="" className="link">
          {svgicon[1].svg}
        </a>
        <a href="" className="link">
          {svgicon[2].svg}
        </a>
        <a href="" className="link">
          {svgicon[3].svg}
        </a>
        <a href="" className="link">
          {svgicon[4].svg}
        </a>
      </div>
      <div className="favorite">
        <a href="">
          {svgicon[5].svg}
          <p>Обране</p>
        </a>
      </div>
      <div className="login">
        <a href="">
          {svgicon[8].svg}
          <p>Увійти</p>
        </a>
      </div>
    </div>
  );
}
