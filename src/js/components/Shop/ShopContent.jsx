import React, { useState } from "react";
import { productCard } from "../../data.js";
import ShopPoducts from "./ShopProduct.jsx";

export default function ShopContent({
  minPrice,
  maxPrice,
  filter,
  handleCheckboxChange,
  min,
  max,
  priceDisable,
  data,
  filterClick,
}) {
  const [sort, setSort] = useState("default");

  const selectOption = (event) => {
    setSort(event.target.value);
  };

  const disableFilters = (filter) => {
    for (let i = 0; i < filter.length; i++) {
      handleCheckboxChange(filter[i], false, true);
    }
    priceDisable();
  };

 

  return (
    <div className="shop__content">
      <div className="shop__title">
        <h1>Магазин</h1>
        <div className="sort">
          <div className="sort__select">
          <label htmlFor="sort">Сортування:</label>
          <select name="sort" id="sort" value={sort} onChange={selectOption}>
            <option value="MinMax">Від дешевих до дорогих</option>
            <option value="MaxMin">Від дорогих до дешевих</option>
            <option value="New">Новинки</option>
            <option value="Popular">Популярні</option>
            <option value="Promotional">Акційні</option>
            <option value="default">За замовчуванням</option>
          </select>
          </div>
          <a className="filters-button" href="#" onClick={() => filterClick()}>
            <img src="@img/filter.png" alt="" />
          </a>
        </div>
      </div>
      <div className="shop__filters">
        {minPrice > min || maxPrice < max ? (
          <a href="#" className="price-filters" onClick={priceDisable}>
            {minPrice} - {maxPrice}
          </a>
        ) : null}

        {filter.length > 0 && (
          <>
            {filter.map(
              (filter, index) =>
                data[filter] && (
                  <a
                    href="#"
                    key={index}
                    onClick={() => handleCheckboxChange(filter, false)}
                  >
                    {filter}
                  </a>
                )
            )}
          </>
        )}
        {minPrice > min || maxPrice < max || filter.length > 0 ? (
          <a
            href="#"
            className="clean-filters"
            onClick={() => disableFilters(filter)}
          >
            Очистити фільтри
          </a>
        ) : null}
      </div>
      <ShopPoducts
        productsPerPage={6}
        productCard={productCard}
        sort={sort}
        minPrice={minPrice}
        maxPrice={maxPrice}
        filter={filter}
      />
    </div>
  );
}
