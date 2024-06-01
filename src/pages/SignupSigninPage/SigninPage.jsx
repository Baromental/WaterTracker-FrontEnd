import React from 'react';
import { useDispatch } from 'react-redux';
import { loginThunk } from '../../redux/auth/operations';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import { BgSection } from '../../components/BgSection/BgSection';
// import { registerSchema } from '../../Schemas/registerShema';

const SigninPage = () => {
  const dispatch = useDispatch();

  const handleSubmit = data => {
    console.log(data);
    dispatch(loginThunk(data));
  };
  return (
    <BgSection>
      <AuthForm
        onSubmit={handleSubmit}
        formType={'login'}
        // schema={registerSchema}
      />
    </BgSection>
  );
};

export default SigninPage;
