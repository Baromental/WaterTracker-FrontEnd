import React from 'react';
import s from './RadioButton.module.css';

const RadioButton = ({
  name,
  id,

  value,
  label,
  placeholder,
  register,
  onChange,
}) => {
  return (
    <div className={s.wrap}>
      <input
        id={id}
        className={s.input}
        {...register(`${name}`)}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
        type="radio"
      />
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
    </div>
  );
};

export default RadioButton;
