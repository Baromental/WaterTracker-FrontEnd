import React, { useState } from 'react';
import { NavLink, useNavigate  } from 'react-router-dom';
import { useSelector } from 'react-redux';
import SettingModal from './HeaderModal/SettingModal/SettingModal';
import UserLogoutModal from './HeaderModal/ModalLogout/UserLogoutModal';
import UserLogoModal from './HeaderModal/UserLogoModal';
import s from './Header.module.css';
import sprite from '../../img/icons/sprite.svg';
import logo from '../../img/logo.png';
import { selectIsLoggedIn, selectName, selectAvatarURL } from '../../redux/auth/authSlice';

const Header = () => {
    const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const userName = useSelector(selectName);
    const userAvatar = useSelector(selectAvatarURL);
    const navigate = useNavigate();
  
    const openSettingsModal = () => {
      setSettingsModalOpen(true);
      setUserMenuOpen(false);
    };
  
    const closeSettingsModal = () => setSettingsModalOpen(false);
  
    const openLogoutModal = () => {
      setLogoutModalOpen(true);
      setUserMenuOpen(false);
    };
  
    const closeLogoutModal = () => setLogoutModalOpen(false);
  
    const toggleUserMenu = () => setUserMenuOpen(!isUserMenuOpen);
  
    const handleLogoClick = () => {
      if (isLoggedIn) {
        navigate('/home');
      } else {
        navigate('/');
      }
    };
  
    const handleLogout = () => {
      closeLogoutModal();
    };
  
    return (
      <header>
        <nav className={s.header}>
          <div className={s.logoLink} onClick={handleLogoClick}>
            <img src={logo} alt="Logo" className="logo" />
          </div>
          {!isLoggedIn && (
            <NavLink to="/signin" className={s.userAuthButton}>
              Sign In
              <svg width="28" height="28" className={s.iconUser}>
                <use href={`${sprite}#icon-user`} />
              </svg>
            </NavLink>
          )}
          {isLoggedIn && (
            <>
              <button className={s.userLogoButton} onClick={toggleUserMenu}>
                <span className={s.userName}>{userName}</span>
                {userAvatar ? (
                  <img src={userAvatar} alt="User Avatar" className={s.userAvatar} />
                ) : (
                  <svg width="28" height="28" className={s.iconUser}>
                    <use href={`${sprite}#icon-user`} />
                  </svg>
                )}
                <svg width="16" height="16" className={s.iconDown}>
                  <use href={`${sprite}#icon-down`} />
                </svg>
              </button>
              {isUserMenuOpen && (
                <UserLogoModal
                  closeModal={toggleUserMenu}
                  onSettingsClick={openSettingsModal}
                  onLogoutClick={openLogoutModal}
                />
              )}
            </>
          )}
        </nav>
        {isSettingsModalOpen && <SettingModal onClose={closeSettingsModal} />}
        {isLogoutModalOpen && <UserLogoutModal onClose={closeLogoutModal} onLogout={handleLogout} />}
      </header>
    );
  };
  
  export default Header;
