import React from 'react';
import s from './ModalLogout.module.css';
import sprite from '../../../../img/icons/sprite.svg';

const ModalLogout = ({ onClose, onLogout }) => {
    return (
        <div className={s.overlay}>
            <div className={s.modal}>
                <button className={s.closeButton} onClick={onClose}>
                    <svg width="24" height="24">
                        <use href={`${sprite}#icon-cross`}></use>
                    </svg>
                </button>
                <h2>Log out</h2>
                <p>Do you really want to leave?</p>
                <div className={s.buttonContainer}>
                    <button className={s.cancelButton} onClick={onClose}>Cancel</button>
                    <button className={s.logoutButton} onClick={onLogout}>Log out</button>
                </div>
            </div>
        </div>
    );
};

export default ModalLogout;
