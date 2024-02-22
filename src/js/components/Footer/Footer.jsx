import React from "react";
import FooterList from "./FooterList.jsx";
import { footerList, svgicon } from "../../data.js";

export default function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__main">
            <img src="@img/logo.svg" alt="" />
            <ul>
              <li>
                <img src="@img/maps-and-flags.svg" alt="" />
                <p>м. Київ, вул. Київська 1</p>
              </li>
              <li>
                <img src="@img/phone-call.svg" alt="" />
                <a href="">+38 (099) 000 00 00</a>
              </li>
              <li>
                <img src="@img/email.svg" alt="" />
                <a href="">support@mail.com</a>
              </li>
            </ul>
          </div>
          <div className="footer__list">
            {window.innerWidth > 740 && window.innerWidth < 980 ? (
              <FooterList key={1} {...footerList[1]} />
            ) : (
              footerList.map((list, index) => (
                <FooterList key={index} {...list} />
              ))
            )}
          </div>
          <div className="footer__links">
            <div className="media">
              <div className="media__title">
                <h6>Ми в соціальних мережах</h6>
              </div>
              <div className="media__links">
                <ul>
                  <li>
                    <a href="">{svgicon[0].svg}</a>
                  </li>
                  <li>
                    <a href="">{svgicon[9].svg}</a>
                  </li>
                  <li>
                    <a href="">{svgicon[1].svg}</a>
                  </li>
                  <li>
                    <a href="">{svgicon[2].svg}</a>
                  </li>
                  <li>
                    <a href="">{svgicon[3].svg}</a>
                  </li>
                </ul>
              </div>
              <div className="media__text">
                <h6>Платіть за допомогою картки</h6>
              </div>
              <div className="media__img">
                <ul>
                  <li>{svgicon[10].svg}</li>
                  <li>{svgicon[11].svg}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
