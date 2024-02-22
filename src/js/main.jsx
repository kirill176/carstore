import * as flsFunctions from "./modules/functions.js";
import ReactDOM from "react-dom/client";
import React from "react";
import App from "./App.jsx";
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
flsFunctions.isWebp();

function slidesToShow() {
  let screenWidth = window.innerWidth;
  if (screenWidth <= 740) {
    return 2;
  } else if (screenWidth <= 980) {
    return 3;
  } else {
    return 4;
  }
}

let slider = slidesToShow();

$(document).ready(function () {
  $(".slider").slick({
    arrows: false, //стрелки
    dots: true, //точки
    adaptiveHeight: false, //авто подстойка высоты
    slidesToShow: 1, //слайдов к отображению
    slidesToScroll: 1, //кол-во слайдов к прокрутке
    speed: 1000, //скорость анимации
    easing: "ease", //тип анимации
    infinite: false, //бесконечность слайдера
    initialSlide: 0, //начальный слайд
    autoplay: false, //автопроигрование
    autoplaySpeed: 1500, //скорость проигрования
    draggable: true, //слайды мышкой
    swipe: true, //слайди свапом
    touchTreshold: 10, //колво длинны свайпа для телефона
    touchMove: true, //анимация тянучести слайдера
    waitForAnimate: true, //ожидание завершения анимации
    centerMode: false, //выделяет центральный слайд
    variableWidth: false, //убирает пробелы между сладами отображая все что поместится
    rows: 1, //количество рядов слайдов
    slidesPerRow: 1, //количество слайдов в рядке
    vertical: false, //вертикальный слайдер
    verticalSwiping: false, //вертикальный свайпы
  });
  $(".sales-lider__slider").slick({
    arrows: true, //стрелки
    dots: false, //точки
    adaptiveHeight: false, //авто подстойка высоты
    slidesToShow: slider, //слайдов к отображению
    slidesToScroll: 1, //кол-во слайдов к прокрутке
    speed: 1000, //скорость анимации
    easing: "ease", //тип анимации
    infinite: false, //бесконечность слайдера
    initialSlide: 0, //начальный слайд
    autoplay: true, //автопроигрование
    autoplaySpeed: 5000, //скорость проигрования
    draggable: false, //слайды мышкой
    swipe: true, //слайди свапом
    touchTreshold: 10, //колво длинны свайпа для телефона
    touchMove: true, //анимация тянучести слайдера
    waitForAnimate: false, //ожидание завершения анимации
    centerMode: false, //выделяет центральный слайд
    variableWidth: false, //убирает пробелы между сладами отображая все что поместится
    rows: 1, //количество рядов слайдов
    slidesPerRow: slider, //количество слайдов в рядке
    vertical: false, //вертикальный слайдер
    verticalSwiping: false, //вертикальный свайпы
  });
});
