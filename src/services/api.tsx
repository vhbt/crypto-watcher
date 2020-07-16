import axios from 'axios';

const api = axios.create({
  baseURL: 'https://blockstream.info/api',
});

export default api;
