import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { AmountOfWater } from '../Inputs/AmountOfWater/AmountOfWater';
import RecordingTime from '../Inputs/RecordingTime/RecordingTime';
import ValueOfTheWater from '../Inputs/ValueOfTheWater/ValueOfTheWater';
import { AmountDisplay } from '../AmountDisplay/AmountDisplay';
import s from './Form.module.css';
import { waterSchema } from '../../../Schemas/waterShema';
import glass from '../../../img/images/glass.svg';

const Form = ({ type, amount, date }) => {
  const methods = useForm({
    defaultValues: {
      amount,
      date,
    },
    resolver: yupResolver(waterSchema),
  });

  const getErrorMessage = (errors, fieldName) => {
    return errors[fieldName] ? errors[fieldName].message : '';
  };

  const {
    formState: { errors },
  } = methods;

  const onSubmit = data => {
    data.date = data.date.toString();
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className={s.form_title}>
          {type === 'add' ? 'Add water' : 'Edit the entered amount of water'}
        </h2>
        {type === 'edit' && (
          <div className={s.edit_data}>
            <img src={glass} alt="glass" />
            <p className={s.ml}>200 ml</p>
            <p className={s.time}>14:00 PM</p>
          </div>
        )}
        <p className={s.text_under_title}>
          {type === 'add' ? 'Choose a value:' : 'Correct entered data:'}
        </p>
        <div className={s.inputs_wrapper}>
          <AmountOfWater />
          <p className={s.error_message}>{getErrorMessage(errors, 'amount')}</p>
          <RecordingTime />
          <p className={s.error_message}>{getErrorMessage(errors, 'date')}</p>
          <ValueOfTheWater />
          <p className={s.error_message}>{getErrorMessage(errors, 'amount')}</p>
        </div>
        <div className={s.btn_wrapper}>
          <AmountDisplay />
          <button type="submit" className={s.btn}>
            Save
          </button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
