import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import s from './Header.module.css';
import sprite from '../../img/icons/sprite.svg';
import logo from '../../img/logo.png';

const Header = () => {
    return (
      <header>
        <div className={s.header}>
          <NavLink to="/" className={s.logoLink}>
            <img src={logo} alt="Logo" className="logo" />
          </NavLink>
          <NavLink to="/signin" className={s.userAuthButton}>Sign In
            <svg width="28" height="28" className={s.iconUser}>
              <use href={`${sprite}#icon-user`} />
            </svg>
          </NavLink>
          {/* <button className={s.userLogoButton}>
            <svg width="28" height="28" className={s.iconDown}>
              <use href={`${sprite}#icon-down`} />
            </svg>
          </button> */}
        </div>
        <Outlet />
      </header>
    );
};

export default Header;
