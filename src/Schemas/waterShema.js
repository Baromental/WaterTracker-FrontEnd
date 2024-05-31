import * as yup from 'yup';

export const waterSchema = yup.object().shape({
  amount: yup
    .number()
    .required('Amount is required')
    .min(1, 'Minimum amount is 1')
    .max(5000, 'Maximum amount is 5000')
    .typeError('Please enter a valid number'),
  date: yup.string().required('Date is required'),
});
