import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

import s from './SettingModal.module.css';
import InputField from './InputField/InputField';
import RadioButton from './RadioButton/RadioButton';
import PasswordField from './PasswordField/PasswordField';
import { useDispatch, useSelector } from 'react-redux';
import {
  selectAvatarURL,
  selectEmail,
  selectGender,
  selectIsLoggedIn,
  selectName,
} from '../../redux/auth/authSlice';
import {
  updateAvatarThunk,
  updateUserThunk,
} from '../../redux/auth/operations';
import ImageField from './ImageField/ImageField';

const SettingModal = () => {
  const dispatch = useDispatch();

  const name = useSelector(selectName);
  const email = useSelector(selectEmail);
  const gender = useSelector(selectGender);
  const photo = useSelector(selectAvatarURL);

  const {
    register,
    handleSubmit,
    setValue,
    setError,
    clearErrors,
    formState: { errors },
  } = useForm({
    defaultValues: {
      name,
      email,
      gender,
    },
  });

  useEffect(() => {
    setValue('name', name);
    setValue('email', email);
    setValue('gender', gender);
  }, [name, email, gender, setValue]);

  const submit = data => {
    console.log(data);
    const { email, name, gender, newPassword, password, repeatNewPass } = data;

    if (newPassword && password === newPassword) {
      setError('newPassword', {
        type: 'manual',
        message: 'New password cannot be the same as the current password.',
      });
      return;
    }

    if (newPassword && newPassword !== repeatNewPass) {
      setError('repeatNewPass', {
        type: 'manual',
        message: 'New password and repeat password do not match.',
      });
      return;
    }

    const updateData = { email, name, gender };

    if (newPassword === password) {
    }

    if (password && newPassword && newPassword === repeatNewPass) {
      updateData.password = password;
      updateData.newPassword = newPassword;
    }

    console.log(updateData);
    dispatch(updateUserThunk(updateData));
  };

  const handlePhotoURLChange = e => {
    e.preventDefault();
    const file = e.target.files[0];
    if (file) {
      const formData = new FormData();
      formData.append('avatarURL', file);
      dispatch(updateAvatarThunk(formData));
    }
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
          src={photo}
          register={register}
          onChange={handlePhotoURLChange}
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
                onChange={() => setValue('gender', 'woman')}
                defaultChecked={gender === 'woman'}
              />
              <RadioButton
                id="man"
                name="gender"
                value="man"
                label="Man"
                register={register}
                onChange={() => setValue('gender', 'man')}
                defaultChecked={gender === 'man'}
              />
            </fieldset>
            <div className={s.wrapInfo}>
              <InputField
                name="name"
                type="text"
                label="Your name"
                placeholder="Enter your name"
                register={register}
              />
              <InputField
                name="email"
                type="email"
                label="E-mail"
                placeholder="Enter your e-mail"
                register={register}
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
              error={errors.password?.message}
            />
            <PasswordField
              name="newPassword"
              type="password"
              label="New Password:"
              placeholder="Password"
              register={register}
              error={errors.newPassword?.message}
            />
            <PasswordField
              name="repeatNewPass"
              type="password"
              label="Repeat new password:"
              placeholder="Password"
              register={register}
              error={errors.repeatNewPass?.message}
            />
          </fieldset>
        </div>

        <button className={s.button}>Save</button>
      </form>
    </>
  );
};

export default SettingModal;
