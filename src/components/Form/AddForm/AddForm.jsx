import React from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { AmountOfWater } from '../Inputs/AmountOfWater/AmountOfWater';
import RecordingTime from '../Inputs/RecordingTime/RecordingTime';
import ValueOfTheWater from '../Inputs/ValueOfTheWater/ValueOfTheWater';
import { AmountDisplay } from '../AmountDisplay/AmountDisplay';

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
        <AmountOfWater />
        <RecordingTime />
        <ValueOfTheWater />
        <div>
          <AmountDisplay />
          <button type="submit">Save</button>
        </div>
      </form>
    </FormProvider>
  );
};

export default AddForm;
