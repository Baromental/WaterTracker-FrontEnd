import React from 'react';
import ReactDatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { Controller, useFormContext } from 'react-hook-form';
import s from './RecordingTime.module.css';
import './reactDatepicker.css';

const RecordingTime = ({ className }) => {
  const { control } = useFormContext();

  return (
    <Controller
      name="date"
      control={control}
      render={({ field }) => (
        <div className={s.wrapper}>
          <label htmlFor="time" className={s.label}>
            Recording time:
          </label>
          <ReactDatePicker
            id="time"
            selected={field.value}
            onChange={date => {
              field.onChange(date);
            }}
            showTimeSelect
            showTimeSelectOnly
            timeIntervals={5}
            timeCaption="Time"
            dateFormat="H:mm aa"
            className={`${s.datepicker} ${s[className]}`}
            wrapperClassName={s.wrapper_datepicker}
          />
        </div>
      )}
    />
  );
};

export default RecordingTime;
