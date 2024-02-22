import React from "react";
import HeaderIcons from "./HeaderIcons.jsx";
import HeaderContent from "./HeaderContent.jsx";
import HeaderShopMenu from "./HeaderShopMenu.jsx";
import { useState } from "react";
import HeaderBuyersMenu from "./HeaderBuyersMenu.jsx";
import HeaderSearchMenu from "./HeaderSearchMenu.jsx";
import HeaderShopingCart from "./HeaderShopingCart.jsx";
import HeaderMenu from "./HeaderMenu.jsx";
export default function Header() {
  const [isHovered, setIsHovered] = useState(false);
  const [buyers, setBuyers] = useState(false);
  const [searchShow, setSearchShow] = useState(false);
  const [shoppingCartShow, setShoppingCartShow] = useState(false);
  const [menu, setMenu] = useState(false);

  const menuClick = () => {
    setMenu((prev) => !prev);
    const wrapper = document.getElementById("root");
    if (!menu) {
      wrapper.classList.add("blur");
    } else {
      wrapper.classList.remove("blur");
    }
  };
  const handleHover = () => {
    setIsHovered(true);
    setSearchShow(false);
  };
  const handleLeave = () => {
    setIsHovered(false);
  };
  const buyersHover = () => {
    setBuyers(true);
    setSearchShow(false);
  };
  const buyersLeave = () => {
    setBuyers(false);
  };
  const searchClick = () => {
    setSearchShow((prev) => !prev);
  };
  const shoppingCartClick = () => {
    setShoppingCartShow((prev) => !prev);
    const wrappers = document.getElementsByClassName("wrapper");
    if (!shoppingCartShow) {
      for (let i = 0; i < wrappers.length; i++) {
        wrappers[i].classList.add("blur");
      }
    } else {
      for (let i = 0; i < wrappers.length; i++) {
        wrappers[i].classList.remove("blur");
      }
    }
  };

  return (
    <>
      <header className="header">
        <HeaderMenu menuClick={menuClick} menuStatus={menu} />
        <HeaderIcons menuClick={menuClick} menu={menu} />
        <HeaderContent
          isHovered={isHovered}
          onHover={handleHover}
          onLeave={handleLeave}
          buyer={buyers}
          bHover={buyersHover}
          bLeave={buyersLeave}
          searchShow={searchClick}
          shoppingCartClick={shoppingCartClick}
        />
        <div className="feader__call-menu">
          <HeaderShopMenu
            isHovered={isHovered}
            onHover={handleHover}
            onLeave={handleLeave}
          />
          <HeaderBuyersMenu
            isHovered={buyers}
            onHover={buyersHover}
            onLeave={buyersLeave}
          />
          <HeaderSearchMenu
            searchShow={searchShow}
            setSearchShow={searchClick}
          />
        </div>
        <HeaderShopingCart
          shoppingCartClick={shoppingCartClick}
          shoppingCartShow={shoppingCartShow}
        />
      </header>
    </>
  );
}
