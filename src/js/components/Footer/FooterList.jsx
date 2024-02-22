import React from "react";

export default function FooterList({title, link1, link2, link3, link4, link5}) {
  return (
    <div className="footer-list">
      <div className="footer-list__title">
        <h6>{title}</h6>
      </div>
      <div className="footer-list__links">
        <ul>
          <li>
            <a href="" className="link">
              {link1}
            </a>
          </li>
          <li>
            <a href="" className="link">
              {link2}
            </a>
          </li>
          <li>
            <a href="" className="link">
              {link3}
            </a>
          </li>
          <li>
            <a href="" className="link">
              {link4}
            </a>
          </li>
          {link5 && (
            <li>
              <a href="" className="link">
                {link5}
              </a>
            </li>
          )}
        </ul>
      </div>
    </div>
  );
}
