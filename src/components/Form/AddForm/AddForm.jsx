import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AmountOfWater } from '../Inputs/AmountOfWater/AmountOfWater';
import RecordingTime from '../Inputs/RecordingTime/RecordingTime';
import ValueOfTheWater from '../Inputs/ValueOfTheWater/ValueOfTheWater';
import { AmountDisplay } from '../AmountDisplay/AmountDisplay';
import s from './AddForm.module.css';

const AddForm = () => {
  const methods = useForm({
    defaultValues: {
      amount: 0,
      time: null,
    },
  });

  const onSubmit = data => {
    data.amount = data.amount || 0;
    console.log(data);
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className={s.form_title}>Add water</h2>
        <p className={s.text_under_title}>Choose a value:</p>
        <div className={s.inputs_wrapper}>
          <AmountOfWater />
          <RecordingTime />
          <ValueOfTheWater />
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

export default AddForm;
