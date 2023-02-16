import axios from 'axios';
import Config from 'react-native-config';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export const api = axios.create({
  withCredentials: true,
  baseURL: Config.API_URL,
});

export const tokenApi = axios.create({
  withCredentials: true,
  baseURL: Config.API_URL,
});

tokenApi.interceptors.response.use(
  async config => config,
  async error => error,
);

api.interceptors.request.use(
  async config => {
    const tokenStorage = await useAsyncStorage('token');
    const token = await tokenStorage.getItem();
    config.headers.Authorization = `Bearer ${token}`;
    return config;
  },
  error => error,
);

api.interceptors.response.use(
  config => config,
  async error => {
    const statusCode = error.response.status;
    if (error.config.isTokensUpdated && statusCode && statusCode === 401) {
      return error;
    }
    const tokenStorage = await useAsyncStorage('token');
    const originalConfig = error.config;
    originalConfig.isTokensUpdated = true;
    const refreshingResult = await tokenApi.get<{accessToken: string}>(
      'auth/refresh',
    );
    if (axios.isAxiosError(refreshingResult)) {
      return error;
    }
    await tokenStorage.setItem(refreshingResult.data.accessToken);
    return api.request(originalConfig);
  },
);
