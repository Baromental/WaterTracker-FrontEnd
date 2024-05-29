import React from 'react';
import { Controller, useFormContext } from 'react-hook-form';
import { FiPlus } from 'react-icons/fi';
import { FiMinus } from 'react-icons/fi';

export const AmountOfWater = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="amount"
      control={control}
      render={({ field }) => (
        <div>
          <button
            type="button"
            onClick={() => field.onChange(Math.max(field.value - 50, 0))}
          >
            <FiMinus />
          </button>
          <input
            type="number"
            readOnly
            value={field.value}
            onChange={e => field.onChange(e.target.value)}
            step={50}
            min={0}
            max={5000}
          />
          <span>ml</span>
          <button
            type="button"
            onClick={() => field.onChange(Math.min(field.value + 50, 5000))}
          >
            <FiPlus />
          </button>
        </div>
      )}
    />
  );
};
