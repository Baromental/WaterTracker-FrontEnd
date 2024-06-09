import * as yup from 'yup';

export const registerSchema = yup
  .object({
    email: yup.string().required().email('Email is not valid'),
    password: yup
      .string()
      .required()
      .min(8, 'Must be more then 8 symbols')
      .max(64, 'Must be less then 64 symbols'),
    repeatPassword: yup
      .string()
      .oneOf([yup.ref('password'), null], 'Passwords must match'),
  })
  .required();
