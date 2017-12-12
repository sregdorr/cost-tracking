import { Pool } from 'pg';

const pool = new Pool();

const dbPool = {
  query: (text, params, callback) => {
    return pool.query(text, params, callback);
  }
};

export default dbPool;