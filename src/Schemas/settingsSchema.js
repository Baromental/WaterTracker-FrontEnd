import * as yup from 'yup';

export const settingsSchema = yup.object().shape({
  name: yup.string().max(32, 'Must be less than 32 symbols'),
  email: yup.string().required('Email is required').email('Email is not valid'),
  password: yup.string().notRequired(),
  newPassword: yup.string().when('password', {
    is: password => password && password.length > 0,
    then: yup
      .string()
      .required('New Password is required')
      .min(8, 'Must be more than 8 symbols')
      .max(64, 'Must be less than 64 symbols'),
  }),
  repeatNewPass: yup
    .string()
    .oneOf([yup.ref('newPassword'), null], 'Passwords must match')
    .when('newPassword', {
      is: newPassword => newPassword && newPassword.length > 0,
      then: yup.string().required('Repeat new password is required'),
    }),
});
