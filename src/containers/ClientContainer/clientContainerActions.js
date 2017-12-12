export const REQUEST_CLIENTS = 'REQUEST_CLIENTS';

export const requestClients = (param) => {
  return ({
    type: REQUEST_CLIENTS,
    payload: param,
  });
};