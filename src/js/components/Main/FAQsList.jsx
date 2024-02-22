import React, { useState } from "react";
export default function FAQsList({ title, text, text1, text2, text3 }) {
  const [active, setActive] = useState(false);

  const listClick = () => {
    setActive((prev) => !prev);
  };
  return (
    <div className={`faq-list ${active ? "faq-list__active" : ""}`}>
      <div className="faq-list__title" onClick={listClick}>
        <h5>{title}</h5>
        <span onClick={listClick}></span>
      </div>
      <div className={`faq-list__text ${active ? "text-active" : ""}`}>
        <p>{text}</p>
        {text1 && <p>{text1}</p>}
        {text2 && <p>{text2}</p>}
        {text3 && <p>{text3}</p>}
      </div>
    </div>
  );
}
