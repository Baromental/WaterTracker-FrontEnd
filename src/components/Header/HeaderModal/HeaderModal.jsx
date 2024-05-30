import React from 'react';
import s from './HeaderModal.module.css';
import sprite from '../../../img/icons/sprite.svg'

const HeaderModal = ({ onSettingsClick, onLogoutClick }) => {
    return (
        <div className={s.menu}>
            <button className={s.menuItem} onClick={onSettingsClick}>
                <svg width="16" height="16" className={s.icon}>
                    <use href={`${sprite}#icon-gear`} />
                </svg>
                Settings
            </button>
            <button className={s.menuItem} onClick={onLogoutClick}>
                <svg width="16" height="16" className={s.icon}>
                    <use href={`${sprite}#icon-exit`} />
                </svg>
                Log out
            </button>
        </div>
    );
};

export default HeaderModal;
