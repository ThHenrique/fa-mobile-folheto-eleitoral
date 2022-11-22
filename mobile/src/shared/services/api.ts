import axios from 'axios';
import SessionController from '../utils/handler/SessionController';

const api = axios.create({
  baseURL: 'http://172.20.10.8:3333',
});

api.interceptors.request.use(async (config: any) => {
  const token = await SessionController.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
