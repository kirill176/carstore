import * as flsFunctions from "./modules/functions.js";
import ReactDOM from "react-dom/client";
import React from "react";
import Products from "./Products.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(<Products />);
flsFunctions.isWebp();

$(document).ready(function () {
  $(".product-slider").slick({
    arrows: false, //стрелки
    dots: false, //точки
    adaptiveHeight: false, //авто подстойка высоты
    slidesToShow: 6, //слайдов к отображению
    slidesToScroll: 1, //кол-во слайдов к прокрутке
    speed: 1000, //скорость анимации
    easing: "ease", //тип анимации
    infinite: false, //бесконечность слайдера
    initialSlide: 0, //начальный слайд
    autoplay: false, //автопроигрование
    draggable: false, //слайды мышкой
    swipe: false, //слайди свапом
    touchTreshold: 10, //колво длинны свайпа для телефона
    touchMove: true, //анимация тянучести слайдера
    waitForAnimate: false, //ожидание завершения анимации
    centerMode: false, //выделяет центральный слайд
    variableWidth: false, //убирает пробелы между сладами отображая все что поместится
    rows: 1, //количество рядов слайдов
    slidesPerRow: 6, //количество слайдов в рядке
    vertical: true, //вертикальный слайдер
    verticalSwiping: false, //вертикальный свайпы
  });
  $(".product__image").slick({
    arrows: true,
    asNavFor: ".product-slider",
  });

  $(".product-slider .slick-slide").on("click", function () {
    // Получаем индекс нажатого слайда в верхнем слайдере
    var slideIndex = $(this).attr("data-slick-index");
    // Переключаем нижний слайдер к соответствующему индексу
    $(".product__image").slick("slickGoTo", slideIndex);
  });
});
