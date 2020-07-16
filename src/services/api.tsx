import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.blockonomics.co/api/',
  headers: {
    Authorization: 'Bearer mvfLUK0nSNKPST1SPjjtsBwMaJPY7PwJPNki2QSaKjA',
  },
});

export default api;
