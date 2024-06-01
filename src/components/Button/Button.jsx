import React from 'react';
import s from './Button.module.css';

const Button = ({ children, type, className, closeModal }) => {
  return (
    <button
      type={type}
      className={`${s.btn} ${s[className]}`}
      onClick={closeModal}
    >
      {children}
    </button>
  );
};

export default Button;
