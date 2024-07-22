import React from 'react';
import AuthForm, { AuthType } from '../components/AuthForm';
import { disclaimer } from '../utils/constants';

const LoginPage: React.FC = () => {
  return (
    <AuthForm
      disclaimer={disclaimer}
      logoIconSrc="/genflowly-logo.png"
      logoIconAlt="GenFlowly logo"
      type={AuthType.Login}
    />
  );
};

export default LoginPage;
