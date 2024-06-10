import * as yup from 'yup';

export const dailyNormaSchema = yup.object().shape({
  gender: yup.string().nullable(),
  weight: yup
    .number()
    .optional()
    .min(0, 'Weight cannot be negative')
    .typeError('Weight must be a number'),
  activity: yup
    .number()
    .optional()
    .min(0, 'Activity time cannot be negative')
    .typeError('Activity hours must be a number'),
  waterRate: yup
    .number()
    .min(0, 'Planned water daily norma must be positive')
    .max(15, 'Planned daily water norm must be a maximum of 15 L')
    .typeError('Planned water daily norma must be a number')
    .optional(),
});
