import React from "react";
import SlickSlider from "./SlickSlider.jsx";
import { categories, cards, accessories } from "../../data";
import Categories from "./Categories.jsx";
import Card from "./Cards.jsx";
import Accessories from "./Accessories.jsx";
import SalesLider from "./SalesLider.jsx";
import FAQs from "./FAQs.jsx";

export default function Main() {
  return (
    <main className="main">
      <SlickSlider />
      <div className="categories">
        <div className="categories__title">
          <h3>Категорії магазину</h3>
        </div>
        <div className="categories__content">
          {categories.map((category, index) => (
            <Categories key={index} image={category.img} name={category.name} />
          ))}
        </div>
      </div>
      <div className="cards-list">
        {cards.map((card, index) => (
          <Card
            key={index}
            number={card.number}
            text={card.text}
            title={card.title}
            image={card.img}
          />
        ))}
      </div>

      <div className="accessories">
        <div className="accessories__container">
          <div className="accessories__title">
            <h3>Корисні аксесуари для автомобіля</h3>
          </div>
          <div className="accessories__content">
            <div className="accessories__items">
              {accessories.map((accessory, index) => (
                <Accessories
                  key={index}
                  title={accessory.title}
                  text={accessory.text}
                />
              ))}
            </div>
            <img src="@img/accessories.png" alt="" />
          </div>
        </div>
      </div>
      <SalesLider />
      <FAQs />
    </main>
  );
}
