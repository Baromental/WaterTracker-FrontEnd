import React from 'react';
import s from './Header.module.css';
import sprite from '../../img/icons/sprite.svg'
import logo from '../../img/logo.png'

const Header = () => {
    return (
      <header>
        <div className={s.header}>
        <a href="/" className={s.logoLink}>
          <img src={logo} alt="Logo" className="logo" />
        </a>
        <button className={s.userAuthButton}>Sign In
          {/* <svg>
            <use width="28" height="28" href={`${sprite}#icon-user`} />
          </svg> */}
        </button>
        {/* <button className={s.userLogoButton}>
          <svg>
            <use width="28" height="28" href={`${sprite}#icon-down`} />
          </svg>
        </button> */}
        </div>
      </header>
    );
  };

export default Header;