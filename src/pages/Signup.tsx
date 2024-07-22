import React from 'react';
import AuthForm, { AuthType } from '../components/AuthForm';
import { disclaimer } from '../utils/constants';

const SignupPage: React.FC = () => {
  return (
    <AuthForm
      disclaimer={disclaimer}
      logoIconSrc="/genflowly-logo.png"
      logoIconAlt="GenFlowly logo"
      type={AuthType.SignUp}
    />
  );
};

export default SignupPage;
