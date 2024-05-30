import React from 'react';
import s from './ModalSettings.module.css';
import sprite from '../../../../img/icons/sprite.svg';

const ModalSettings = ({ onClose }) => {
    return (
        <div className={s.overlay}>
            <div className={s.modal}>
                <button className={s.closeButton} onClick={onClose}>
                    <svg width="24" height="24">
                        <use href={`${sprite}#icon-cross`}></use>
                    </svg>
                </button>
                <h2>Settings</h2>
            </div>
        </div>
    );
};

export default ModalSettings;
