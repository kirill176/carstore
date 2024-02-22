import React from "react";
import Header from "./components/Header/Header.jsx";
import ProductContent from "./components/Product/ProductContent.jsx";
import Feedbacks from "./components/Product/Feedbacks.jsx";
import Footer from "./components/Footer/Footer.jsx"

export default function Products() {
  return (
    <>
        <Header />
        <ProductContent />
        <Feedbacks />
        <Footer/>
    </>
  );
}
