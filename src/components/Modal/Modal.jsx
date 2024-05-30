import React, { useCallback, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { IoCloseOutline } from 'react-icons/io5';
import s from './Modal.module.css';
const modalRoot = document.querySelector('#modal');

const Modal = ({ closeModal, children }) => {
  const handleKeyDown = useCallback(
    e => {
      if (e.key === 'Escape') {
        closeModal();
      }
    },
    [closeModal]
  );

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [closeModal, handleKeyDown]);

  const handleBackdropClick = e => {
    if (e.target === e.currentTarget) {
      closeModal();
    }
  };

  return ReactDOM.createPortal(
    <div onClick={handleBackdropClick} className={s.backdrop}>
      <div className={s.modal}>
        <button onClick={closeModal} className={s.btn_close}>
          <IoCloseOutline className={s.icon_close} />
        </button>
        {children}
      </div>
    </div>,
    modalRoot
  );
};

export default Modal;
