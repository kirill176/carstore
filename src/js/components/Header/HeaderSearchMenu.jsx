import React from "react";

export default function HeaderSearchMenu({ searchShow, setSearchShow }) {

  function clearInput() {
    let searchInput = document.getElementById("search");
    if (searchInput.value === "") {
      searchInput.placeholder = "Пошук";
    }
  }
  return (
    <div className={`header__search-menu ${searchShow ? "search-show" : ""}`}>
      <div className="search">
        <input
          type="text"
          id="search"
          name="search"
          placeholder="Пошук"
          onFocus={clearInput}
        />
      </div>
      <div className="close-button" onClick={setSearchShow}>
        <span></span>
      </div>
    </div>
  );
}
