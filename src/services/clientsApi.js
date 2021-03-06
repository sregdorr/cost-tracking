import axios from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import { normalize } from 'normalizr';
import { Schemas } from '../entities/schemas';

const ROOT_URL = 'http://localhost:8000/api';
const token = '59dc78a092e670a4e8915e03698812e7513031bc';
// const token = '';
const config = {
  headers: {
    "Authorization": `Token ${token}`
  }
};

export const getClients = () => {
  const url = `${ROOT_URL}/clients/`;

  return axios.get(url, config)
    .then(response => {
      const camelizedJson = camelizeKeys(response.data);
      const normalizedData = normalize(camelizedJson, Schemas.CLIENTS);

      return Object.assign({},
        normalizedData
      );
    })
    .catch(response => {
      return response.response.data.detail;
    });
};

export const postClient = client => {
  const url = `${ROOT_URL}/clients/`;
  const data = decamelizeKeys(client);

  return axios.post(url, data, config)
    .then(response => {
      return response.data;
    })
    .catch(response => {
      return response.response.data.detail;
    });
};

export const putClient = client => {
  const url = client.url;
  const data =decamelizeKeys(client);

  return axios.put(url, data, config)
    .then(response => {
      return response.data;
    })
    .catch(resonse => {
      return resonse.response.data.detail;
    });
};