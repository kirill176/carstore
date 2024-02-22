import React from "react";

export default function HeaderMenuList({
  title,
  text1,
  text2,
  text3,
  text4,
  text5,
  text6,
  link1,
  link2,
  link3,
  link4,
  link5,
  link6,
  menuClick,
}) {
  return (
    <div className="menu-list">
      <div className="menu-list__title">
        <h5>{title}</h5>
        {title == "Меню" && <span onClick={menuClick}></span>}
      </div>
      <div className="menu-list__links">
        <a href={link1}>{text1}</a>
        <a href={link2}>{text2}</a>
        {text3 && <a href={link3}>{text3}</a>}
        {text4 && <a href={link4}>{text4}</a>}
        {text5 && <a href={link5}>{text5}</a>}
        {text6 && <a href={link6}>{text6}</a>}
      </div>
    </div>
  );
}
