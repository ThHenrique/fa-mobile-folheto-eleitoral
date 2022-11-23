import axios from 'axios';
import SessionController from '../utils/handler/SessionController';

const api = axios.create({
  baseURL: 'http://192.168.0.9:3333',
});

api.interceptors.request.use(async (config: any) => {
  const token = await SessionController.getToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;
