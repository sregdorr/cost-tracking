
export const SELECT_CLIENT = 'SELECT_CLIENT';

export const selectClient = client => {
  return ({
    type: SELECT_CLIENT,
    client,
  });
};