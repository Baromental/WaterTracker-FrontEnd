import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import { toast } from 'react-toastify';

import PasswordField from './PasswordField/PasswordField';
import InputField from './InputField/InputField';

import s from './AuthForm.module.css';

export const AuthForm = ({ formType, onSubmit, schema }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const navigate = useNavigate();

  const submit = data => {
    const { repeatPassword, ...signupData } = data;
    onSubmit(signupData)
      .then(response => {
        if (!response.error) {
          formType === 'register' ? navigate('/signin') : navigate('/home');
        }
      })
      .catch(error => {
        toast.error('Submission error:', error);
      });
  };

  return (
    <div className={s.mainWrap}>
      <h1 className={s.title}>
        {formType === 'register' ? 'Sign Up' : 'Sign In'}
      </h1>
      <form className={s.form} onSubmit={handleSubmit(submit)}>
        <InputField
          id="email"
          name="email"
          type="email"
          label="Enter your email"
          placeholder="E-mail"
          register={register}
          error={errors.email?.message}
        />
        <PasswordField
          id="password"
          name="password"
          label="Enter your password"
          placeholder="Password"
          register={register}
          error={errors.password?.message}
        />

        {formType === 'register' && (
          <PasswordField
            id="repeatPassword"
            name="repeatPassword"
            label="Repeat password"
            placeholder="Repeat password"
            register={register}
            error={errors.repeatPassword?.message}
          />
        )}
        <button className={s.button}>
          {formType === 'register' ? 'Sign Up' : 'Sign In'}
        </button>

        {formType === 'register' ? (
          <Link to="/signin" className={s.link}>
            Sign in
          </Link>
        ) : (
          <Link to="/signup" className={s.link}>
            Sign up
          </Link>
        )}
      </form>
    </div>
  );
};
