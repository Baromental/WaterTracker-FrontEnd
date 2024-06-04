import React, { useRef, useState } from 'react';

import sprite from '../../../img/icons/sprite.svg';
import s from './ImageField2.module.css';

const ImageField2 = ({
  name,
  type,
  label,
  placeholder,
  src,
  register,
  onChange,
}) => {
  const [imagePreview, setImagePreview] = useState(src);

  const inputRef = useRef(null);

  const handleFileChange = e => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
    if (onChange) {
      onChange(e);
    }
  };

  const handleButtonClick = () => {
    inputRef.current.click();
  };

  return (
    <div className={s.wrap}>
      <label className={s.label} htmlFor={name}>
        {label}
      </label>
      <div className={s.imageWrap}>
        <div className={s.imagePreviewContainer}>
          {imagePreview ? (
            <img src={imagePreview} alt="Preview" className={s.imagePreview} />
          ) : (
            <div className={s.placeholder}>{placeholder}</div>
          )}
        </div>
        <input
          id={name}
          className={s.input}
          name={name}
          type={type}
          onChange={handleFileChange}
          ref={e => {
            register(`${name}`);
            inputRef.current = e;
          }}
        />
        <button type="button" onClick={handleButtonClick} className={s.button}>
          <svg width="16" height="16" className={s.icon}>
            <use href={`${sprite}#icon-arrow-up`} />
          </svg>{' '}
          Upload a photo
        </button>
      </div>
    </div>
  );
};

export default ImageField2;
