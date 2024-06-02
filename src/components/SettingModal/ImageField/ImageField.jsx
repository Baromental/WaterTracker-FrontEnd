import React from 'react';
import s from './ImageField.module.css';

const ImageField = ({
  name,
  id,
  type,
  value,
  label,
  placeholder,
  register,
  onChange,
}) => {
  return (
    <div className={s.wrap}>
      <label htmlFor={id} className={s.label}>
        {label}
      </label>
      <div className={s.imageWrap}>
        <img
          className={s.image}
          width="80"
          src="../../img/213796.001.jpg"
          alt="Currency rate"
        />
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
    </div>
  );
};

export default ImageField;
