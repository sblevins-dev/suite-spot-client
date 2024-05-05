import axios from 'axios';

const BASE_URL = "http://localhost:8080";

const api = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
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