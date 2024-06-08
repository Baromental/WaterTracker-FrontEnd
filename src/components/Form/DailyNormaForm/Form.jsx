import React, { useEffect, useCallback, useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useSelector } from 'react-redux';
import { selectWaterRate } from '../../../redux/auth/authSlice';
import { dailyNormaSchema } from '../../../Schemas/dailyNormaShema';
import Button from '../../Button/Button';
import s from './Form.module.css';

const Form = () => {
  const prevWaterRate = useSelector(selectWaterRate);

  const [userWaterRate, setUserWaterRate] = useState(0);
  const [calculatedWaterRate, setCalculatedWaterRate] = useState(0);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(dailyNormaSchema),
    defaultValues: {
      weight: 0,
      activity: 0,
      waterRate: 0,
    },
  });

  const calculateWaterDailyNorma = useCallback(data => {
    const { gender, weight, activity } = data;
    let waterDailyNorma;
    if (gender === 'women') {
      waterDailyNorma = weight * 0.03 + activity * 0.4;
    } else {
      waterDailyNorma = weight * 0.04 + activity * 0.6;
    }

    setCalculatedWaterRate(waterDailyNorma.toFixed(1));
    return waterDailyNorma.toFixed(1);
  }, []);

  const handleWaterRateChange = e => {
    setUserWaterRate(e.target.value);
  };

  const onSubmit = () => {
    if (userWaterRate > 0) {
      console.log(userWaterRate);
    } else {
      console.log(calculatedWaterRate);
    }
  };

  const formData = watch();

  useEffect(() => {
    if (formData.gender && formData.weight > 0 && formData.activity >= 0) {
      calculateWaterDailyNorma(formData);
    }
  }, [formData]);

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={s.form}>
      <h2 className={s.form_title}>My daily norma</h2>
      <div className={s.formula_wrapper}>
        <div className={s.formula}>
          <p>
            For girl:{' '}
            <span className={s.accent_color}>V=(M*0,03) + (T*0,4)</span>
          </p>
          <p>
            For man:{' '}
            <span className={s.accent_color}>V=(M*0,04) + (T*0,6)</span>
          </p>
        </div>
        <p className={s.formula_explanation}>
          <span className={s.accent_color}>*</span> V is the volume of the water
          norm in liters per day, M is your body weight, T is the time of active
          sports, or another type of activity commensurate in terms of loads (in
          the absence of these, you must set 0)
        </p>
      </div>
      <div className={s.calculation_wrapper}>
        <div>
          <h3 className={s.calculation_title}>Calculate your rate:</h3>
          <div className={s.gender_inputs}>
            <div className={s.gender_input_wrapper}>
              <input
                className={`${s.input_gender} ${
                  errors.gender && s.input_error
                }`}
                id="gender-girl"
                type="radio"
                value="women"
                {...register('gender')}
              />
              <label htmlFor="gender-girl" className={s.label}>
                For girl
              </label>
            </div>
            <div className={s.gender_input_wrapper}>
              <input
                className={`${s.input_gender} ${
                  errors.gender && s.input_error
                }`}
                id="gender-man"
                type="radio"
                value="man"
                {...register('gender')}
              />
              <label className={s.label} htmlFor="gender-man">
                For man
              </label>
            </div>
          </div>
        </div>
        {errors.gender && (
          <p className={s.validation_error}>{errors.gender.message}</p>
        )}
        <div className={s.input_wrapper}>
          <label htmlFor="weight" className={s.label}>
            Your weight in kilograms:
          </label>
          <input
            className={`${s.input} ${errors.weight && s.input_error}`}
            id="weight"
            type="number"
            {...register('weight')}
          />
        </div>
        {errors.weight && (
          <p className={s.validation_error}>{errors.weight.message}</p>
        )}
        <div className={s.input_wrapper}>
          <label htmlFor="activity" className={s.label}>
            The time of active participation in sports or other activities with
            a high physical. load in hours:
          </label>
          <input
            className={`${s.input} ${errors.activity && s.input_error}`}
            id="activity"
            type="nuber"
            {...register('activity')}
          />
          {errors.activity && (
            <p className={s.validation_error}>{errors.activity.message}</p>
          )}
        </div>

        <div className={s.required_water_input_wrapper}>
          <label htmlFor="requiredWater" className={s.label}>
            The required amount of water in liters per day:
          </label>
          <output id="requiredWater" className={s.required_water}>
            {userWaterRate > 0
              ? `${userWaterRate} L`
              : calculatedWaterRate > 0
              ? `${calculatedWaterRate} L`
              : `${prevWaterRate} L`}
          </output>
        </div>
      </div>
      <div>
        <h3 className={s.calculation_title}>
          Write down how much water you will drink:
        </h3>
        <input
          className={`${s.input} ${errors.waterRate && s.input_error}`}
          id="waterRate"
          type="text"
          {...register('waterRate')}
          onChange={handleWaterRateChange}
        />
        {errors.waterRate && (
          <p className={s.validation_error_waterRate}>
            {errors.waterRate.message}
          </p>
        )}
      </div>
      <div className={s.btn_wrapper}>
        <Button type="submit" className="blue">
          Save
        </Button>
      </div>
    </form>
  );
};

export default Form;
