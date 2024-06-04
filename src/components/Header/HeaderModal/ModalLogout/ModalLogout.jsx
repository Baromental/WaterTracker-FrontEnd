import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import s from './ModalLogout.module.css';
import sprite from '../../../../img/icons/sprite.svg';

const modalRoot = document.querySelector('#modal');

const ModalLogout = ({ onClose, onLogout }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    },
    [onClose]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <button className={s.closeButton} onClick={onClose}>
          <svg width="24" height="24">
            <use href={`${sprite}#icon-cross`}></use>
          </svg>
        </button>
        <h2>Log out</h2>
        <p>Do you really want to leave?</p>
        <div className={s.buttonContainer}>
          <button className={s.cancelButton} onClick={onClose}>
            Cancel
          </button>
          <button className={s.logoutButton} onClick={onLogout}>
            Log out
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default ModalLogout;
