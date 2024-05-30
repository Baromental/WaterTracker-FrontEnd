import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { AuthForm } from '../../components/AuthForm/AuthForm';
// import { registerSchema } from '../../Schemas/registerShema';

const SignupPage = () => {
  const dispatch = useDispatch();
  console.log('ok');

  const handleSubmit = data => {
    console.log(data);
    dispatch(registerThunk(data));
  };
  return (
    <div>
      <AuthForm
        onSubmit={handleSubmit}
        formType={'register'}
        // schema={registerSchema}
      />
    </div>
  );
};

export default SignupPage;
