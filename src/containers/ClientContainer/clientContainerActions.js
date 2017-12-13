
export const SELECT_CLIENT = 'SELECT_CLIENT';

export const selectClient = id => {
  return ({
    type: SELECT_CLIENT,
    id,
  });
};