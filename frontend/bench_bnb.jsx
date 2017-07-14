import React from 'react';
import ReactDOM from 'react-dom';

import { signup, login, logout } from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  // const preloadedState = localStorage.state ?
  //   JSON.parse(localStorage.state) : {};
  // const store = configureStore(preloadedState);

  window.signup = signup;
  window.login = login;
  window.logout = logout;

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Bench BnB!</h1>, root);
});
