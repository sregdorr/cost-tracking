export const RESET_ERROR_MESSAGE = 'RESET_ERROR_MESSAGE';

export const REQUEST_CLIENTS = 'REQUEST_CLIENTS';
export const REQUEST_CLIENTS_SUCCESS = 'REQUEST_CLIENTS_SUCCESS';
export const REQUEST_CLIENTS_FAILED = 'REQUEST_CLIENTS_FAILED';

export const REQUEST_ADD_CLIENT = 'REQUEST_ADD_CLIENT';
export const REQUEST_ADD_CLIENT_SUCCESS = 'REQUEST_ADD_CLIENT_SUCCESS';
export const REQUEST_ADD_CLIENT_FAILED = 'REQUEST_ADD_CLIENT_FAILED';



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

export const requestAddClient = (client) => {
  return ({
    type: REQUEST_ADD_CLIENT,
    client,
  });
};

export const requestAddClientSuccess = (id) => {
  return ({
    type: REQUEST_ADD_CLIENT_SUCCESS,
    id,
  });
};

export const requestAddClientFailed = error => {
  return ({
    type: REQUEST_ADD_CLIENT_FAILED,
    error,
  });
};


