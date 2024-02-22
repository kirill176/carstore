import React, { useState } from "react";
import FilterList from "./FilterList.jsx";

export default function Filter({
  unique,
  children,
  handleCheckboxChange,
  data,
}) {
  let length = unique.length;
  length *= 30;
  length += 50;
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive((prev) => !prev);
  };

  return (
    <div
      className={`filter ${active ? "filter__active" : ""}`}
      style={active ? { maxHeight: `${length}px` } : null}
    >
      <h6
        className={`name ${active ? "name__active" : ""}`}
        onClick={handleClick}
      >
        {children}
      </h6>
      <div className="filter__list">
        <ul>
          {unique.map(
            (filter, index) =>
              filter && (
                <FilterList
                  key={index}
                  filter={filter}
                  handleCheckboxChange={handleCheckboxChange}
                  index={index}
                  data = {data}
                />
              )
          )}
        </ul>
      </div>
    </div>
  );
}
