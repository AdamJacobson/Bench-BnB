export const fetchAllBenches = () => {
  return $.ajax({
    url: 'api/benches',
    type: 'GET'
  });
};

export const sendBench = (data) => {
  return $.ajax({
    url: 'api/benches',
    type: 'POST',
    data
  });
};
