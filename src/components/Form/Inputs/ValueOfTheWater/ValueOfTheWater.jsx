import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import s from './ValueOfTheWater.module.css';

const ValueOfTheWater = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="amount"
      control={control}
      render={({ field }) => (
        <div className={s.wrapper}>
          <label htmlFor="water-value" className={s.label}>
            Enter the value of the water used:
          </label>
          <input
            className={s.input}
            id="water-value"
            type="number"
            value={field.value}
            onChange={e => {
              const value = e.target.value;
              if (value <= 5000 && value >= 0) {
                field.onChange(value);
              }
            }}
            min={0}
            max={5000}
          />
        </div>
      )}
    />
  );
};

export default ValueOfTheWater;
