import React from "react";
import { headerMenu } from "../../data.js";
import HeaderMenuList from "./HeaderMenuList.jsx";

export default function HeaderMenu({ menuClick, menuStatus }) {
  return (
    <div className={`header-menu ${menuStatus ? "header-menu__show" : ""}`}>
      <div className="header-menu__list">
        {headerMenu.map((menu, index) => (
          <HeaderMenuList key={index} {...menu} menuClick={menuClick} />
        ))}
      </div>
    </div>
  );
}
