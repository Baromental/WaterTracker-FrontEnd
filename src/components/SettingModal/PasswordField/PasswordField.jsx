import React from 'react';
import s from './PasswordField.module.css';

const PasswordField = ({
  name,
  id,
  type,
  value,
  label,
  placeholder,
  register,
  onChange,
  error,
}) => {
  console.log(error);
  return (
    <div className={s.wrap}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <input
        id={id}
        className={s.input}
        {...register(`${name}`)}
        name={name}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        // error={error}
      />
      {error && <span className={s.error}>{error}</span>}
    </div>
  );
};

export default PasswordField;
