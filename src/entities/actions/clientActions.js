export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const REQUEST_CLIENTS = 'REQUEST_CLIENTS';
export const REQUEST_CLIENTS_SUCCESS = 'REQUEST_CLIENTS_SUCCESS';
export const REQUEST_CLIENTS_FAILED = 'REQUEST_CLIENTS_FAILED';



export const resetErrorMessage = () => {
  return ({
    type: RESET_ERROR_MESSAGE,
  });
};

export const requestClients = () => {
  return ({
    type: REQUEST_CLIENTS,
    key: 'visibleClients',
  });
};

export const requestClientsSucceeded = (response) => {
  return ({
    type: REQUEST_CLIENTS_SUCCESS,
    response,
    key: 'visibleClients',
  });
};

export const requestClientsFailed = (error) => {
  return ({
    type: REQUEST_CLIENTS_FAILED,
    error,
    key: 'visibleClients',
  });
};