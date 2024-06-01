import React from 'react';
import { useDispatch } from 'react-redux';
import { registerThunk } from '../../redux/auth/operations';
import { AuthForm } from '../../components/AuthForm/AuthForm';
import { BgSection } from '../../components/BgSection/BgSection';
// import { registerSchema } from '../../Schemas/registerShema';

const SignupPage = () => {
  const dispatch = useDispatch();
  console.log('ok');

  const handleSubmit = data => {
    console.log(data);
    dispatch(registerThunk(data));
  };
  return (
    <BgSection>
      <AuthForm
        onSubmit={handleSubmit}
        formType={'register'}
        // schema={registerSchema}
      />
    </BgSection>
  );
};

export default SignupPage;
