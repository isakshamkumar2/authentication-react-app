import React from 'react';
// import { GoogleOAuthProvider } from '@react-oauth/google';
// import LoginWithGoogle from './components/LoginWithGoogle';
// import { GOOGLE_AUTH_CLIENT_ID } from './utils/constants';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './AppRoutes';

const App: React.FC = () => {
  return (
    <Router>
      <AppRoutes />
    </Router>
  );
};

export default App;
