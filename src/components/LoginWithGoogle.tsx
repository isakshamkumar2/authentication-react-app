import React, { useState } from 'react';
import {
  hasGrantedAllScopesGoogle,
  TokenResponse,
  useGoogleLogin,
} from '@react-oauth/google';

const LoginWithGoogle: React.FC = () => {
  const [tokenResponse, setTokenResponse] = useState({});

  const login = useGoogleLogin({
    onSuccess: (tokenResponse) => setTokenResponse(tokenResponse),
    flow: 'auth-code',
  });

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const hasAccess = hasGrantedAllScopesGoogle(
    tokenResponse as TokenResponse,
    'email',
    'profile',
    'openid'
  );

  return (
    <div>
      <button onClick={() => login()} data-testid="google-login-button">
        Sign in with Google 🚀
      </button>
    </div>
  );
};

export default LoginWithGoogle;
