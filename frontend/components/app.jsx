import React from 'react';
import { Route } from 'react-router-dom';

import GreetingContainer from './greeting_container';
import SessionFormContainer from './session_form_container';

const App = () => {
  return (
    <div>
      <h1>Bench BnB</h1>
      <GreetingContainer/>

      <Route path="/login" component={SessionFormContainer}/>
      <Route path="/signup" component={SessionFormContainer}/>
    </div>
  );
};

export default App;
