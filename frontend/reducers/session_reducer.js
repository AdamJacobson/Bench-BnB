/*
{
  session: {
    currentUser: null,
    errors: ["Invalid credentials"]
  }
}
--------
{
  session: {
    currentUser: {
      id: 1,
      username: 'breakfast'
    },
    errors: []
  }
}
*/

import { RECEIVE_ERRORS, RECEIVE_CURRENT_USER }
  from '../actions/session_actions';

const sessionReducer = (state, action) => {
  Object.freeze(state);

  const defaultState = { currentUser: null, errors: [] };

  switch (action.type) {
    case RECEIVE_ERRORS:
      return { currentUser: null, errors: action.errors };
    case RECEIVE_CURRENT_USER:
      return { currentUser: action.currentUser, errors: [] };
    default:
      return defaultState;
  }
};

export default sessionReducer;
