import axios from 'axios';
import { camelizeKeys } from 'humps';
import { normalize } from 'normalizr';
import { Schemas } from '../entities/schemas';

const ROOT_URL = 'http://localhost:8000/api';
const token = '59dc78a092e670a4e8915e03698812e7513031bc';

export const fetchClients = () => {
  const url = `${ROOT_URL}/clients/`;
  const config = {
    headers: {
      "Authorization": `Token ${token}`
    }
  };
  return axios.get(url, config)
    .then(response => {
      const camelizedJson = camelizeKeys(response.data);
      const normalizedData = normalize(camelizedJson, Schemas.CLIENTS);

      return Object.assign({},
        normalizedData
      );
    });
};