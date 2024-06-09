import * as yup from 'yup';

export const dailyNormaSchema = yup.object().shape({
  gender: yup.string().required('Gender is required'),
  weight: yup
    .number()
    .required('Weight is required')
    .positive('Weight must be positive')
    .typeError('Weight must be a number'),
  activity: yup
    .number()
    .required('Activity time is required')
    .min(0, 'Activity time cannot be negative')
    .typeError('Activity hours must be a number'),
  waterRate: yup
    .number()
    .min(0, 'Planned water daily norma must be positive')
    .typeError('Planned water daily norma must be a number')
    .optional(),
});
