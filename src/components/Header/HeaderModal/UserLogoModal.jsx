import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import s from './UserLogoModal.module.css';
import sprite from '../../../img/icons/sprite.svg';

const modalRoot = document.querySelector('#modal');

const UserLogoModal = ({ closeModal, onSettingsClick, onLogoutClick }) => {
  const handleKeyDown = useCallback(
    (e) => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const handleBackdropClick = (e) => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <div onClick={handleBackdropClick} className={s.modalWrapper}>
      <div className={s.modalContent}>
        <div className={s.menu}>
          <button className={s.menuItem} onClick={onSettingsClick}>
            <svg width="16" height="16" className={s.icon}>
              <use href={`${sprite}#icon-gear`} />
            </svg>
            Setting
          </button>
          <button className={s.menuItem} onClick={onLogoutClick}>
            <svg width="16" height="16" className={s.icon}>
              <use href={`${sprite}#icon-exit`} />
            </svg>
            Log out
          </button>
        </div>
      </div>
    </div>,
    modalRoot
  );
};

export default UserLogoModal;
