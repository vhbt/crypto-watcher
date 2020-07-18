import axios from 'axios';

const api = axios.create({
  baseURL: 'https://www.blockonomics.co/api/',
});

export default api;
