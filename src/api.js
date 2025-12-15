import axios from "axios";

const api = axios.create({
  baseURL: "https://myshopbackend-gj8m.onrender.com/api"
});

api.interceptors.request.use(req => {
  const token = localStorage.getItem("userToken");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export default api;
