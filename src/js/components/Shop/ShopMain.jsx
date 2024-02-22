import React, { useEffect, useState } from "react";
import ShopMenu from "./ShopMenu.jsx";
import ShopContent from "./ShopContent.jsx";
import { productCard } from "../../data.js";

export default function ShopMain() {
  const [min, setMin] = useState(0);
  const [max, setMax] = useState(0);
  const [minProgress, setMinProgress] = useState(0);
  const [maxProgress, setMaxProgress] = useState(0);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [data, setData] = useState({});
  const [filters, setFilters] = useState(false);
  const [menu, setMenu] = useState(false);


  useEffect(() => {
    const prices = productCard.map((product) => product.price);
    const minPrice = Math.min(...prices);
    const maxPrice = Math.max(...prices);
    setMin(minPrice);
    setMax(maxPrice);
    setMinProgress(minPrice);
    setMaxProgress(maxPrice);
    setMinPrice(minPrice);
    setMaxPrice(maxPrice);
  }, [productCard]);

  function handleSliderChange(values, handle) {
    const value = parseInt(values[handle]);
    if (handle === 0) {
      setMinProgress(value);
    } else if (handle === 1) {
      setMaxProgress(value);
    }
  }

  const filterClick = () => {
    setMenu((prev) => !prev);
    const wrapper = document.getElementById("root");
    if (!menu) {
      wrapper.classList.add("blur");
    } else {
      wrapper.classList.remove("blur");
    }
    setFilters(!filters);
  };

  function setMinMax() {
    setMinPrice(minProgress);
    setMaxPrice(maxProgress);
  }

  function minChange(event) {
    const newMin = parseInt(event.target.value);
    if (!isNaN(newMin) && newMin < max) {
      setMinProgress(newMin);
    }
  }

  function maxChange(event) {
    const newMax = parseInt(event.target.value);
    if (!isNaN(newMax) && newMax > min) {
      setMaxProgress(newMax);
    }
  }

  const handleCheckboxChange = (filter, value, del) => {
    const newData = { ...data };
    newData[filter] = value;

    if (value) {
      setSelectedFilters([...selectedFilters, filter]);
    } else {
      setSelectedFilters(selectedFilters.filter((item) => item != filter));
    }

    if (del) {
      setSelectedFilters([]);
      for (const key in newData) {
        newData[key] = false;
      }
    }

    setData(newData);
  };

  const priceDisable = () => {
    setMinProgress(min);
    setMaxProgress(max);
    setMinPrice(min);
    setMaxPrice(max);
  };

  return (
    <div className="shop">
      <div className={`shop__container ${filters ? "showed" : ""}`}>
        <ShopMenu
          min={min}
          max={max}
          minProgress={minProgress}
          maxProgress={maxProgress}
          handleSliderChange={handleSliderChange}
          minChange={minChange}
          maxChange={maxChange}
          setMinMax={setMinMax}
          handleCheckboxChange={handleCheckboxChange}
          setData={setData}
          data={data}
          filters={filters}
          filterClick={filterClick}
        />
      </div>
      <ShopContent
        min={min}
        max={max}
        minPrice={minPrice}
        maxPrice={maxPrice}
        filter={selectedFilters}
        handleCheckboxChange={handleCheckboxChange}
        priceDisable={priceDisable}
        data={data}
        filterClick={filterClick}
      />
    </div>
  );
}
