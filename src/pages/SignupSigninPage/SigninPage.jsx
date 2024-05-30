import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { AuthForm } from '../../components/AuthForm/AuthForm';
// import { registerSchema } from '../../Schemas/registerShema';

const SigninPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    console.log(data);
    dispatch(loginThunk(data));
  };
  return (
    <div>
      <AuthForm
        onSubmit={handleSubmit}
        formType={'login'}
        // schema={registerSchema}
      />
    </div>
  );
};

export default SigninPage;
