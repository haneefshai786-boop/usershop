import axios from 'axios';

const api = axios.create({
  baseURL: 'https://myshopbackend-gj8m.onrender.com/api',
});

export default api;
