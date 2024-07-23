import React from 'react';
import { GoogleOAuthProvider } from '@react-oauth/google';
import LoginWithGoogle from './LoginWithGoogle';
import { GOOGLE_AUTH_CLIENT_ID } from '../utils/constants';

const Login = () => {
  return (
    <div className="App">
      <header className="header">
        <h1 className="title">GenFlowly</h1>
      </header>
      <div className="lwg-button">
        <GoogleOAuthProvider clientId={GOOGLE_AUTH_CLIENT_ID}>
          <LoginWithGoogle />
        </GoogleOAuthProvider>
      </div>
    </div>
  );
};

export default Login;
