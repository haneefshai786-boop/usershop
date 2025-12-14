
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://myshopbackend-gj8m.onrender.com/api'
});

// Attach token for admin routes if exists
api.interceptors.request.use(config => {
  const token = localStorage.getItem('adminToken');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
