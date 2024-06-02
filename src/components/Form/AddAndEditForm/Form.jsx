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
import formatDate from '../../../helpers/formatDate';
import { useDispatch } from 'react-redux';
import {
  addWaterThunk,
  deleteWaterThunk,
  editWaterThunk,
} from '../../../redux/water/operations';
import Button from '../../Button/Button';

const Form = ({ type, amount, date, id, closeModal }) => {
  const dispatch = useDispatch();

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
    console.log(data);
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
            <p className={s.error_message}>
              {getErrorMessage(errors, 'amount')}
            </p>
            <RecordingTime />
            <p className={s.error_message}>{getErrorMessage(errors, 'date')}</p>
            <ValueOfTheWater />
            <p className={s.error_message}>
              {getErrorMessage(errors, 'amount')}
            </p>
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
