import React from 'react';
import InputField from '../InputField';
import s from './Password.module.css';

const Password = ({ register, onChange }) => {
  return (
    <fieldset className={s.fieldset}>
      <legend className={s.title}>Password</legend>
      <InputField
        name="password"
        type="password"
        label="Outdated password:"
        placeholder="Password"
        register={register}
        onChange={onChange}
      />
      <InputField
        name="newPass"
        type="password"
        label="New Password:"
        placeholder="Password"
        register={register}
        onChange={onChange}
      />
      <InputField
        name="repeatNewPass"
        type="password"
        label="Repeat new password:"
        placeholder="Password"
        register={register}
        onChange={onChange}
      />
    </fieldset>
  );
};

export default Password;
