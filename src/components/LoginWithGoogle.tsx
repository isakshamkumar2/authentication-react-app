import { GoogleLogin, useGoogleOneTapLogin } from "@react-oauth/google";
import React from 'react';

const LoginWithGoogle: React.FC = () => {

  useGoogleOneTapLogin({
    onSuccess: credentialResponse => {
      console.log(credentialResponse);
    },
    onError: () => {
      console.log('Login Failed');
    },
  });

  return (
    <GoogleLogin
      onSuccess={credentialResponse => {
        console.log(credentialResponse);
      }}
      onError={() => {
        console.log('Login Failed');
      }}
      auto_select
    />
  )
}

export default LoginWithGoogle;

// https://accounts.google.com/gsi/select?client_id=1046572768111-oua5qvcj6ilkesacsb74drp9or12qk99.apps.googleusercontent.com&auto_select=true&ux_mode=popup&ui_mode=card&as=UM8DrQbgmn/odoFyRfXEwQ&channel_id=2725eb7074a6eaafa5b0d639c59c15e274fb60bd8261765db97e7ff67a01bb7d&origin=http://localhost:3000&pli=1&authuser=0