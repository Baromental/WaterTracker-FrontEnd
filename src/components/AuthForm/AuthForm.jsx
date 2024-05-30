import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

import s from './AuthForm.module.css';

export const AuthForm = ({ formType, onSubmit }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const submit = data => {
    const { repeatPassword, ...signupData } = data;
    console.log(data);
    onSubmit(signupData);
    console.log(data);
    reset();
  };

  return (
    <div className={s.authForm}>
      <h1 className={s.title}>
        {formType === 'register' ? 'Sign Up' : 'Sign In'}
      </h1>
      <form className={s.form} onSubmit={handleSubmit(submit)}>
        <div className={s.wrap}>
          <label htmlFor="email" className={s.label}>
            Enter your email
          </label>
          <input
            id="email"
            className={s.input}
            {...register('email', {
              required: { value: true, message: 'Field is required' },
            })}
            name="email"
            placeholder="E-mail"
          />
        </div>
        <div className={s.wrap}>
          <label htmlFor="password" className={s.label}>
            Enter your password
          </label>
          <input
            id="password"
            className={s.input}
            {...register('password', {
              required: { value: true, message: 'Field is required' },
            })}
            name="password"
            placeholder="Password"
          />
        </div>

        {formType === 'register' && (
          <div className={s.wrap}>
            <label htmlFor="repeatPassword" className={s.label}>
              Repeat password
            </label>
            <input
              id="repeatPassword"
              className={s.input}
              {...register('repeatPassword', {
                required: { value: true, message: 'Field is required' },
              })}
              name="repeatPassword"
              placeholder="Repeat password"
            />
          </div>
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
