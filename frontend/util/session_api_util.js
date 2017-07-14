/*
signup: should make an AJAX request that creates a new user.
login: should make an AJAX request that creates a new session.
logout: should make an AJAX request that deletes the current session.
*/

export const signup = (userdata) => {
  return $.ajax({
    url: '/api/users',
    type: 'POST',
    data: userdata
  });
};

export const login = (userdata) => {
  return $.ajax({
    url: 'api/session',
    type: 'POST',
    data: userdata
  });
};

export const logout = () => {
  return $.ajax({
    url: 'api/session',
    type: 'DELETE'
  });
};
