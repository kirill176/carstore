import React, { useEffect } from "react";
import { categories } from "../../data.js";
import ShopMenuList from "./ShopMenuList.jsx";
import PriceFilter from "./PriceFilter.jsx";
import Filter from "./Filter.jsx";
import { productCard } from "../../data.js";

export default function ShopMenu({
  min,
  max,
  minProgress,
  maxProgress,
  handleSliderChange,
  minChange,
  maxChange,
  setMinMax,
  handleCheckboxChange,
  isChecked,
  setData,
  data,
  filterClick,
}) {
  const uniqueManufacturers = [
    ...new Set(productCard.map((product) => product.manufacturer)),
  ];
  const uniqueCollor = [
    ...new Set(productCard.map((product) => product.color)),
  ];
  const uniqueMaterial = [
    ...new Set(productCard.map((product) => product.material)),
  ];
  const uniqueCountry = [
    ...new Set(productCard.map((product) => product.country)),
  ];

  useEffect(() => {
    const newData = {};

    uniqueManufacturers.forEach((filter) => {
      newData[filter] = false;
    });

    uniqueCollor.forEach((filter) => {
      newData[filter] = false;
    });

    uniqueMaterial.forEach((filter) => {
      newData[filter] = false;
    });

    uniqueCountry.forEach((filter) => {
      newData[filter] = false;
    });

    setData(newData);
  }, []);

  return (
    <div className="shop__menu">
      <div className="shop__close">
        <button className="close" onClick={() => filterClick()}></button>
      </div>

      <div className="category-menu">
        <div className="category-menu__list">
          <ul>
            {categories.map((category, index) => (
              <ShopMenuList key={index} name={category.name} />
            ))}
          </ul>
        </div>
      </div>
      <div className="filters">
        <div className="filters__title">
          <h5>Фільтри</h5>
        </div>
        <div className="filters__price">
          <PriceFilter
            min={min}
            max={max}
            minProgress={minProgress}
            maxProgress={maxProgress}
            handleSliderChange={handleSliderChange}
            minChange={minChange}
            maxChange={maxChange}
            setMinMax={setMinMax}
          />
        </div>
        <div className="filters__manufacturer">
          <Filter
            unique={uniqueManufacturers}
            handleCheckboxChange={handleCheckboxChange}
            isChecked={isChecked}
            data={data}
          >
            Виробник
          </Filter>
        </div>
        <div className="filters__color">
          <Filter
            unique={uniqueCollor}
            handleCheckboxChange={handleCheckboxChange}
            isChecked={isChecked}
            data={data}
          >
            Колір
          </Filter>
        </div>
        <div className="filters__meterial">
          <Filter
            unique={uniqueMaterial}
            handleCheckboxChange={handleCheckboxChange}
            isChecked={isChecked}
            data={data}
          >
            Матеріал
          </Filter>
        </div>
        <div className="filters__country">
          <Filter
            unique={uniqueCountry}
            handleCheckboxChange={handleCheckboxChange}
            isChecked={isChecked}
            data={data}
          >
            Країна-виробник
          </Filter>
        </div>
      </div>
      <div className="shop__submit">
        <button className="submit" onClick={() => filterClick()}>
          Переглянути товари
        </button>
      </div>
    </div>
  );
}
