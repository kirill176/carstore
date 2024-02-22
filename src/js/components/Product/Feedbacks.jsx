import React from "react";

export default function Feedbacks() {
  return (
    <div className="feedback">
      <div className="feedback__content">
        <div className="feedback__title">
          <h2>Відгуки</h2>
        </div>
        <div className="feedback__image">
          <img src="@img/empty-comments-list.svg" alt="" />
          <span>
            Ще немає відгуків <p>Будьте першим, хто залишить відгук</p>
          </span>
        </div>
        <div className="feedback__items"></div>
      </div>
      <div className="feedback__form">
        <div className="form-title">
          <h2>Залишіть свій відгук</h2>
        </div>
        <form action="">
          <label htmlFor="name">Ім'я*</label>
          <input type="text" name="name" id="name" />
          <label htmlFor="email">Email*</label>
          <input type="email" name="email" id="email" />
          <p>Поставте оцінку</p>
          <div className="stars">
            <img src="@img/icon-disable.svg" alt="" className="star" />
            <img src="@img/icon-disable.svg" alt="" className="star" />
            <img src="@img/icon-disable.svg" alt="" className="star" />
            <img src="@img/icon-disable.svg" alt="" className="star" />
            <img src="@img/icon-disable.svg" alt="" className="star" />
          </div>
          <label htmlFor="message">Повідомлення коментаря*</label>
          <textarea name="message" id="message" cols="30" rows="5"></textarea>
          <button type="submit">Залишити відгук</button>
        </form>
      </div>
    </div>
  );
}
