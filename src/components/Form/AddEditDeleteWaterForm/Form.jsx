import React from 'react';
import { useDispatch } from 'react-redux';
import { FormProvider, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { waterSchema } from '../../../Schemas/waterShema.js';
import formatDate from '../../../helpers/formatDate';
import {
  addWaterThunk,
  deleteWaterThunk,
  editWaterThunk,
} from '../../../redux/water/operations';
import Button from '../../Button/Button';
import AmountDisplay from '../AmountDisplay/AmountDisplay';
import AmountOfWater from '../Inputs/AmountOfWater/AmountOfWater';
import RecordingTime from '../Inputs/RecordingTime/RecordingTime';
import ValueOfTheWater from '../Inputs/ValueOfTheWater/ValueOfTheWater';
import glass from '../../../img/images/glass.svg';
import s from './Form.module.css';

const Form = ({ type, amount, date, id, closeModal }) => {
  const dispatch = useDispatch();

  const methods = useForm({
    defaultValues: {
      amount,
      date,
    },
    resolver: yupResolver(waterSchema),
  });

  const {
    formState: { errors },
  } = methods;

  const onSubmit = data => {
    data.date = data.date.toString();
    switch (type) {
      case 'edit':
        dispatch(editWaterThunk({ ...data, id }));
        break;
      case 'add':
        dispatch(addWaterThunk(data));
        break;
      case 'delete':
        dispatch(deleteWaterThunk({ ...data, id }));
        break;
      default:
        break;
    }
    closeModal();
  };

  const modalTitle = type => {
    switch (type) {
      case 'edit':
        return 'Edit the entered amount of water';
      case 'add':
        return 'Add water';
      case 'delete':
        return 'Delete entry';
    }
  };

  const textUnderTitle = type => {
    switch (type) {
      case 'edit':
        return 'Correct entered data:';
      case 'add':
        return 'Choose a value:';
      case 'delete':
        return 'Are you sure you want to delete the entry?';
    }
  };

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <h2 className={s.form_title}>{modalTitle(type)}</h2>
        {type === 'edit' && (
          <div className={s.edit_data}>
            <img src={glass} alt="glass" />
            <p className={s.ml}>{amount}ml</p>
            <p className={s.time}>{formatDate(date)}</p>
          </div>
        )}
        <p className={s.text_under_title}>{textUnderTitle(type)}</p>
        {type !== 'delete' && (
          <div className={s.inputs_wrapper}>
            <AmountOfWater />
            {errors.amount && (
              <p className={s.error_message}>{errors.amount.message}</p>
            )}
            <RecordingTime className={errors.date ? 'error' : ''} />
            {errors.date && (
              <p className={s.error_message}>{errors.date.message}</p>
            )}
            <ValueOfTheWater className={errors.amount ? 'error' : ''} />
            {errors.amount && (
              <p className={s.error_message}>{errors.amount.message}</p>
            )}
          </div>
        )}
        <div className={s.btn_wrapper}>
          {type !== 'delete' && <AmountDisplay />}
          {type === 'delete' && (
            <Button type="button" className={'cancel'} onClick={closeModal}>
              Cancel
            </Button>
          )}
          <Button type="submit" className={type === 'delete' ? 'red' : 'blue'}>
            {type === 'delete' ? 'Delete' : 'Save'}
          </Button>
        </div>
      </form>
    </FormProvider>
  );
};

export default Form;
