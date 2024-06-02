import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import s from './SettingModal.module.css';
import InputField from './InputField';
import RadioButton from './RadioButton/RadioButton';
import PasswordField from './PasswordField/PasswordField';
import ImageField from './ImageField/ImageField';

const SettingModal = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const submit = data => {
    console.log(data);
  };
  useEffect(() => {}, []);

  const handleNameChange = event => {
    const value = event.target.value;
  };
  return (
    <>
      <h1 className={s.title}>Setting</h1>
      <form className={s.form} onSubmit={handleSubmit(submit)}>
        <ImageField
          name="avatar"
          type="file"
          label="Your photo"
          placeholder="Upload a photo"
          register={register}
          onChange={handleNameChange}
        />

        <div className={s.mainWrap}>
          <div>
            <fieldset className={s.fieldsetGender}>
              <legend className={s.legend}>Your gender identity</legend>
              <RadioButton
                id="woman"
                name="gender"
                value="woman"
                label="Woman"
                register={register}
                onChange={handleNameChange}
              />
              <RadioButton
                id="man"
                name="gender"
                value="man"
                label="Man"
                register={register}
                onChange={handleNameChange}
              />
            </fieldset>
            <div className={s.wrapInfo}>
              <InputField
                name="name"
                type="text"
                label="Your name"
                placeholder="Enter your name"
                register={register}
                onChange={handleNameChange}
              />
              <InputField
                name="email"
                type="email"
                label="E-mail"
                placeholder="Enter your e-mail"
                register={register}
                onChange={handleNameChange}
              />
            </div>
          </div>

          <fieldset className={s.fieldset}>
            <legend className={s.legend}>Password</legend>
            <PasswordField
              name="password"
              type="password"
              label="Outdated password:"
              placeholder="Password"
              register={register}
              onChange={handleNameChange}
            />
            <PasswordField
              name="newPass"
              type="password"
              label="New Password:"
              placeholder="Password"
              register={register}
              onChange={handleNameChange}
            />
            <PasswordField
              name="repeatNewPass"
              type="password"
              label="Repeat new password:"
              placeholder="Password"
              register={register}
              onChange={handleNameChange}
            />
          </fieldset>
        </div>

        <button type="submit" className={s.button}>
          Save
        </button>
      </form>
    </>
  );
};

export default SettingModal;
