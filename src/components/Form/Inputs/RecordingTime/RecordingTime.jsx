import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';

const RecordingTime = () => {
  const { control } = useFormContext();

  return (
    <Controller
      name="time"
      control={control}
      render={({ field }) => (
        <ReactDatePicker
          selected={field.value}
          onChange={date => {
            field.onChange(date);
          }}
          showTimeSelect
          showTimeSelectOnly
          timeIntervals={5}
          timeCaption="Time"
          dateFormat="h:mm aa"
        />
      )}
    />
  );
};

export default RecordingTime;
