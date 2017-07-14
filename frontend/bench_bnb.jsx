import React from 'react';
import ReactDOM from 'react-dom';

document.addEventListener('DOMContentLoaded', () => {
  // const preloadedState = localStorage.state ?
  //   JSON.parse(localStorage.state) : {};
  // const store = configureStore(preloadedState);

  const root = document.getElementById('root');
  ReactDOM.render(<h1>Welcome to Bench BnB!</h1>, root);
});
