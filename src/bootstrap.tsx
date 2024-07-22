import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import i18n from '../i18n';
import App from './App';
import './styles/lightTheme.scss';
const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
const body = document.documentElement;

body.classList.add('light-theme');
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
