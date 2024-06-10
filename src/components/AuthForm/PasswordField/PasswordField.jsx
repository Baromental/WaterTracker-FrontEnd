import React, { useState } from 'react';

import sprite from '../../../img/icons/sprite.svg';
import s from './PasswordField.module.css';

const PasswordField = ({
  name,
  id,
  value,
  label,
  placeholder,
  register,
  onChange,
  error,
}) => {
  const [type, setType] = useState('password');

  return (
    <div className={s.wrap}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <div className={s.wrapInput}>
        <div
          className={s.eye}
          onClick={() => {
            setType(type === 'password' ? 'text' : 'password');
          }}
        >
          {type === 'password' ? (
            <svg className={s.icon} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-crossed-eye`} />
            </svg>
          ) : (
            <svg className={s.icon} width="16" height="16">
              <use xlinkHref={`${sprite}#icon-eye`} />
            </svg>
          )}
        </div>

        <input
          id={id}
          className={s.input}
          {...register(`${name}`)}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange}
        />
      </div>

      {error && <span className={s.error}>{error}</span>}
    </div>
  );
};

export default PasswordField;
