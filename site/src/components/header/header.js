import "../../css/style.css";

import { NavLink } from "react-router-dom";

import logo from "./../../img/page1/Logo.svg";
import ytw from "./../../img/page1/youtube__white.svg";
import vkw from "./../../img/page1/vk__white.svg";

const Header = () => {
  return (
    <header className="header">
      <div className="header__container _container">
        <div className="header__main">
          <NavLink to="/" className="header__main__logo">
            <img src={logo} alt="" />
          </NavLink>
          <div className="header__main__block">
            <nav className="header__main__menu">
              <ul className="menu__list">
                <li className="menu__item">
                  <NavLink to="/" className="menu__link">
                    Главная
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/About" className="menu__link">
                    О клубе
                  </NavLink>
                </li>
                <li className="menu__item">
                  <NavLink to="/News" className="menu__link">
                    Турниры
                  </NavLink>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Услуги
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Детский теннис
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Галерея
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Цены
                  </a>
                </li>
                <li className="menu__item">
                  <a href="/" className="menu__link">
                    Контакты
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__links">
            <nav className="links__main__menu">
              <ul className="links__list">
                <li className="links__item">
                  <a href="/" className="links__link">
                    <img src={ytw} alt="" />
                  </a>
                </li>
                <li className="links__item">
                  <a href="/" className="links__link">
                    <img src={vkw} alt="" />
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
      <hr />
    </header>
  );
};

export default Header;
