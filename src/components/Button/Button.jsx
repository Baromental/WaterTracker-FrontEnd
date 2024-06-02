import React from 'react';
import s from './Button.module.css';

const Button = ({ children, type, className, onClick }) => {
  return (
    <button
      type={type}
      className={`${s.btn} ${s[className]}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
