import React from "react";

export default function FilterList({ filter, handleCheckboxChange, data }) {
  const checkboxChange = (filter, e) => {
    handleCheckboxChange(filter, e.target.checked, false);
  };


  return (
    <li>
      <input
        type="checkbox"
        name=""
        id={filter}
        onChange={(e) => checkboxChange(filter, e)}
        checked={data[filter]}
      />
      <p>{filter}</p>
    </li>
  );
}
