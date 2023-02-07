import {useAsyncStorage} from '@react-native-async-storage/async-storage';

export const useToken = () => {
  const token = useAsyncStorage('token');

  async function setToken(value: string) {
    await token.setItem(value);
  }

  async function clearToken() {
    await setToken('');
  }

  async function getToken() {
    return await token.getItem();
  }

  async function isTokenExist() {
    const tokenValue = await token.getItem();
    return tokenValue && tokenValue.length;
  }

  return {
    setToken,
    clearToken,
    getToken,
    isTokenExist,
  };
};
