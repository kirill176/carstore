import React from "react";
import { faqsList } from "../../data";
import FAQsList from "./FAQsList.jsx";
export default function FAQs() {
  return (
    <div className="faqs">
      <div className="faqs__title">
        <h2>FAQs</h2>
      </div>
      <div className="faqs__text">
        <p>У вас є які-небудь питання? У нас є відповіді</p>
      </div>
      <div className="faqs__list">
        {faqsList.map((faq, index) => (
          <FAQsList
            key={index}
            title={faq.title}
            text={faq.text}
            text1={faq.text1}
            text2={faq.text2}
            text3={faq.text3}
          />
        ))}
        
      </div>
    </div>
  );
}
