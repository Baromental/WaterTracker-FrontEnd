import React from 'react';
import { useFormContext } from 'react-hook-form';

export const AmountDisplay = () => {
  const { watch } = useFormContext();
  const amount = watch('amount');

  return <p>{amount || 0}ml</p>;
};
