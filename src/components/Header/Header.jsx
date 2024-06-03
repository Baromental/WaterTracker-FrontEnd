import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux'
import ModalSettings from './HeaderModal/ModalSettings/ModalSettings';
import ModalLogout from './HeaderModal/ModalLogout/ModalLogout';
import HeaderModal from './HeaderModal/HeaderModal';
import s from './Header.module.css';
import sprite from '../../img/icons/sprite.svg';
import logo from '../../img/logo.png';
import { selectIsLoggedIn } from '../../redux/auth/authSlice';

const Header = () => {
    const [isSettingsModalOpen, setSettingsModalOpen] = useState(false);
    const [isLogoutModalOpen, setLogoutModalOpen] = useState(false);
    const [isUserMenuOpen, setUserMenuOpen] = useState(false);
    const isLoggedIn = useSelector(selectIsLoggedIn)

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

    const handleLogout = () => {
        closeLogoutModal();
    };

    return (
        <header>
            <nav className={s.header}>
                <NavLink to="/" className={s.logoLink}>
                    <img src={logo} alt="Logo" className="logo" />
                </NavLink>
                {!isLoggedIn && (
					<>
						<NavLink to="/signin" className={s.userAuthButton}>Sign In
                            <svg width="28" height="28" className={s.iconUser}>
                                <use href={`${sprite}#icon-user`} />
                            </svg>
                        </NavLink>
					</>
				)}
				{isLoggedIn && (
					<>
						<button className={s.userLogoButton} onClick={toggleUserMenu}>
                            <svg width="28" height="28" className={s.iconDown}>
                                <use href={`${sprite}#icon-down`} />
                            </svg>
                        </button>
                {isUserMenuOpen && (
                    <HeaderModal
                        onSettingsClick={openSettingsModal}
                        onLogoutClick={openLogoutModal}
                    />
                )}
					</>
				)}   
            </nav>
            {isSettingsModalOpen && <ModalSettings onClose={closeSettingsModal} />}
            {isLogoutModalOpen && <ModalLogout onClose={closeLogoutModal} onLogout={handleLogout} />}
        </header>
    );
};

export default Header;

