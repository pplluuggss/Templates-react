import "../../css/style.css";

import { NavLink } from "react-router-dom";

import ytp from "./../../img/page1/youtube__purple.svg";
import vkp from "./../../img/page1/vk__purple.svg";
import tgp from "./../../img/page1/tg__purple.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container _container">
        <div className="footer__main">
          <div className="footer__block1">2022 © Все права защищены.</div>
          <div className="header__main__block">
            <nav className="footer__main__menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <NavLink to="/" className="menu__link _bl">
                    Главная
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/About" className="menu__link _bl">
                    О клубе
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/News" className="menu__link _bl">
                    Турниры
                  </NavLink>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link _bl">
                    Услуги
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link _bl">
                    Детский теннис
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link _bl">
                    Галерея
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link _bl">
                    Цены
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link _bl">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="footer__links">
            <nav className="links__main__menu__footer">
              <ul className="links__list">
                <li className="links__item">
                  <a href="/" className="links__link">
                    <img src={ytp} alt="" />
                  </a>
                </li>
                <li className="links__item">
                  <a href="/" className="links__link">
                    <img src={vkp} alt="" />
                  </a>
                </li>
                <li className="links__item">
                  <a href="/" className="links__link">
                    <img src={tgp} alt="" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
