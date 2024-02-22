import React, { useState } from "react";
import ShopProductCard from "./ShopProductCard.jsx";

export default function ShopPoducts({
  productsPerPage,
  productCard,
  sort,
  minPrice,
  maxPrice,
  filter,
}) {
  const [currentPage, setCurrentPage] = useState(1);

  let sortedProducts = [...productCard];

  const sortFunctions = {
    MinMax: (a, b) => a.price - b.price,
    MaxMin: (a, b) => b.price - a.price,
    New: (a, b) => {
      return a.id - b.id;
    },
    Popular: (a, b) => a.name - b.name,
    Promotional: (a, b) => {},
    default: (a, b) => {},
  };

  if (sortFunctions.hasOwnProperty(sort)) {
    if (sort === "New") {
      sortedProducts = sortedProducts
        .slice() // создаем копию массива перед применением изменений
        .reverse()
        .filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );
    } else {
      sortedProducts = sortedProducts
        .slice() // создаем копию массива перед применением изменений
        .sort(sortFunctions[sort])
        .filter(
          (product) => product.price >= minPrice && product.price <= maxPrice
        );
    }
  }

  sortedProducts = sortedProducts.filter(
    (product) =>
      (filter.length === 0 ||
        filter.includes(product.manufacturer) ||
        filter.includes(product.color) ||
        filter.includes(product.material) ||
        filter.includes(product.country)) &&
      product.price >= minPrice &&
      product.price <= maxPrice
  );

  const renderProducts = () => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return sortedProducts
      .slice(startIndex, endIndex)
      .map((product, index) => (
        <ShopProductCard
          key={startIndex + index}
          img={product.img1}
          name={product.name}
          price={product.price}
          id={product.id}
        />
      ));
  };

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(sortedProducts.length / productsPerPage);

  return (
    <>
      <div className="shop__products">{renderProducts()}</div>
      <div className="pagination">
        {Array.from({ length: totalPages }, (_, index) => index + 1).map(
          (pageNumber) => (
            <button
              key={pageNumber}
              onClick={() => handlePageChange(pageNumber)}
              className={pageNumber === currentPage ? "active" : ""}
            >
              {pageNumber}
            </button>
          )
        )}
      </div>
    </>
  );
}
