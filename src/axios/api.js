import axios from 'axios';

const BASE_URL = process.env.REACT_APP_API_URL;
const API_HOST = process.env.REACT_APP_API_HOST;
const API_KEY = process.env.REACT_APP_API_KEY;

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json',
        "x-rapidapi-host": API_HOST,
        "x-rapidapi-key": API_KEY
    }
})

const _get = (url, config = {}) => {
    return api.get(url, config);
}
const _delete = (url, config = {}) => {
    return api.delete(url, config);
  };
  
  const _put = (url, data = {}, config = {}) => {
    return api.put(url, data, config);
  };
  
  const _post = (url, data = {}, config = {}) => {
    return api.post(url, data, config);
  };
  
  // Export API methods
  export { _get, _delete, _put, _post }