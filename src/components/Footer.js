

import React from "react";
import "../styles/Footer.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__addr">
        <h1 className="footer__logo">GreenGrocer</h1>
        <h2>Contact</h2>
        <address>
          5534 Somewhere In. The World 22193-10212<br />
          <a className="footer__btn" href="mailto:example@gmail.com">
            Email Us
          </a>
          <Link to={"/Support"} className="btnSuporte">
            Suporte
          </Link>
        </address>
      </div>

      <ul className="footer__nav">
        <li className="nav__item">
          <h2 className="nav__title">Media</h2>
          <ul className="nav__ul">
            <li>
              <a href="/">Online</a>
            </li>
            <li>
              <a href="/">Print</a>
            </li>
            <li>
              <a href="/">Alternative Ads</a>
            </li>
          </ul>
        </li>
        <li className="nav__item nav__item--extra">
          <h2 className="nav__title">Integrantes</h2>
          <ul className="nav__ul nav__ul--extra">
            <li>
              <a href="/">Lucas</a>
            </li>
            <li>
              <a href="/">Bruna</a>
            </li>
            <li>
              <a href="/">Lara</a>
            </li>
            <li>
              <a href="/">Mateus</a>
            </li>
            <li>
              <a href="/">Melquiades</a>
            </li>
            <li>
              <a href="/">Arthur</a>
            </li>
            <li>
              <a href="/">Dantas</a>
            </li>
            <li>
              <a href="/">Agenor</a>
            </li>
          </ul>
        </li>
        <li className="nav__item">
          <h2 className="nav__title">Legal</h2>
          <ul className="nav__ul">
            <li>
              <a href="/">Privacy Policy</a>
            </li>
            <li>
              <a href="/">Terms of Use</a>
            </li>
            <li>
              <a href="/">Sitemap</a>
            </li>
          </ul>
        </li>
      </ul>

      <div className="legal">
        <p>&copy; 2024 GreenGrocer. All rights reserved.</p>
        <div className="legal__links">
          <span>
            Made with <span className="heart">♥</span> Lucas Souza
          </span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
