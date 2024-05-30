import React from 'react';
import { useFormContext } from 'react-hook-form';
import s from './AmountDisplay.module.css';

export const AmountDisplay = () => {
  const { watch } = useFormContext();
  const amount = watch('amount');

  return <p className={s.amount}>{amount || 0}ml</p>;
};
