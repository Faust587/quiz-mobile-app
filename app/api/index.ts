import axios from 'axios';
import Config from 'react-native-config';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {useToken} from '../hooks/useToken';

export const api = axios.create({
  withCredentials: true,
  baseURL: Config.API_URL,
});

api.interceptors.request.use(async config => {
  const {getToken, isTokenExist} = useToken();
  const isToken = await isTokenExist();
  if (!isToken) {
    return config;
  }
  const token = await getToken();
  const accessToken = `Bearer ${token}`;
  // @ts-ignore
  config.headers = {
    ...config.headers,
    Authorization: accessToken,
  };
  return config;
});

type refreshTokenResponse = {
  accessToken: string;
};

api.interceptors.response.use(
  config => config,
  async error => {
    const AsyncStorage = useAsyncStorage('token');
    const originalRequest = error.config;
    if (
      error.response?.status === 401 &&
      error.config &&
      !error.config._isRetry
    ) {
      originalRequest.isRetry = true;
      const tokensPair = await axios
        .get<refreshTokenResponse>('http://localhost:4000/auth/refresh', {
          withCredentials: true,
        })
        .catch(e => e);
      if (axios.isAxiosError(tokensPair)) {
        return tokensPair;
      }
      const {accessToken} = tokensPair.data;
      await AsyncStorage.setItem(accessToken);
      return api.request(originalRequest);
    }
    return error;
  },
);
