import React from "react";
import SlickButtons from "./SlickButtons.jsx";

export default function SlickSlider() {
  return (
    <>
      <div className="slider">
        <div className="slider__item">
          {window.innerWidth > 500 ? (
            <img data-lazy="@img/slider1.jpg" alt="" className="slide-image" />
          ) : (
            <img
              data-lazy="@img/slider1min.jpg"
              alt=""
              className="slide-image"
            />
          )}

          <div className="slider__text">
            <h2>Інтернет-магазин авто-товарів</h2>
            <p>
              У нас є абсолютно все, незалежно від Ваших вимог та фінансових
              можливостей!
            </p>
            <SlickButtons />
          </div>
        </div>
        <div className="slider__item">
          {window.innerWidth > 500 ? (
            <img data-lazy="@img/slider2.jpg" alt="" className="slide-image" />
          ) : (
            <img
              data-lazy="@img/slider2min.jpg"
              alt=""
              className="slide-image"
            />
          )}
          <div className="slider__text">
            <h2>Автомобільні товари європейської якості</h2>
            <p>
              Магазин гарантує своєчасну доставку аксесуарів для авто по всій
              Україні!
            </p>
            <SlickButtons />
          </div>
        </div>
      </div>
    </>
  );
}
