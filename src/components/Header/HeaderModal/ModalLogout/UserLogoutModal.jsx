import React, { useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom';
import s from './UserLogoutModal.module.css';
import sprite from '../../../../img/icons/sprite.svg';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logoutThunk } from '../../../../redux/auth/operations';
import { logout } from '../../../../redux/auth/authSlice';

const modalRoot = document.querySelector('#modal');

const UserLogoutModal = ({ onClose }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const onLogout = () => {
    dispatch(logoutThunk());
    dispatch(logout());
    onClose();
    navigate('/');
  };

  const handleKeyDown = useCallback(
    e => {
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

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return ReactDOM.createPortal(
    <div className={s.overlay} onClick={handleBackdropClick}>
      <div className={s.modal}>
        <div className={s.header}>
          <h2 className={s.title}>Log out</h2>
          <button className={s.closeButton} onClick={onClose}>
            <svg width="24" height="24">
              <use href={`${sprite}#icon-cross`}></use>
            </svg>
          </button>
        </div>
        <p className={s.paragraph}>Do you really want to leave?</p>
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

export default UserLogoutModal;
