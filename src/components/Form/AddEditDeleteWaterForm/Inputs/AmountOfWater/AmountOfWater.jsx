import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';
import s from './AmountOfWater.module.css';

export const AmountOfWater = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="amount"
      control={control}
      render={({ field }) => (
        <div className={s.wrapper}>
          <label htmlFor="amount-water" className={s.label}>
            Amount of water:
          </label>
          <div className={s.input_wrapper}>
            <button
              className={s.btn}
              type="button"
              onClick={() => field.onChange(Math.max(field.value - 50, 0))}
            >
              <FiMinus className={s.icon} />
            </button>
            <div className={s.input_container}>
              <div className={s.input} id="amount-water">
                {field.value || 0}ml
              </div>
            </div>
            <button
              className={s.btn}
              type="button"
              onClick={() => field.onChange(Math.min(field.value + 50, 5000))}
            >
              <FiPlus className={s.icon} />
            </button>
          </div>
        </div>
      )}
    />
  );
};
