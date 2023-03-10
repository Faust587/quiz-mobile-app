import {createAsyncThunk} from '@reduxjs/toolkit';
import {api, tokenApi} from '../../../api';
import axios, {AxiosError} from 'axios';
import {TUser} from '../../entity/User';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';

interface IOnFilledRefreshTokenResponse {
  accessToken: string;
}

interface IOnFilledLoginResponse {
  user: TUser;
  accessToken: string;
}

interface IOnRejectedLoginResponse {
  statusCode: number;
  message: string;
  error: string;
}

interface ILoginRequestData {
  username: string;
  password: string;
}

export const checkIsAuth = createAsyncThunk<null, void>(
  'auth/checkIsAuth',
  async function (data, thunkAPI) {
    const refreshingResult = await tokenApi.get<IOnFilledRefreshTokenResponse>(
      'auth/refresh',
    );
    if (axios.isAxiosError(refreshingResult)) {
      return thunkAPI.rejectWithValue(null);
    }
    const {accessToken} = refreshingResult.data;
    const tokenLocalStorage = useAsyncStorage('token');
    await tokenLocalStorage.setItem(accessToken).catch(() => {
      return thunkAPI.rejectWithValue(null);
    });
    return thunkAPI.fulfillWithValue(null);
  },
);

export const login = createAsyncThunk<
  IOnFilledLoginResponse,
  ILoginRequestData,
  {rejectValue: IOnRejectedLoginResponse | undefined}
>('auth/login', async function (data, thunkAPI) {
  const loginResult = await api.post<IOnFilledLoginResponse>(
    'auth/login',
    data,
  );
  if (axios.isAxiosError(loginResult)) {
    const rejectedResponse =
      loginResult as AxiosError<IOnRejectedLoginResponse>;
    const errorData = rejectedResponse.response?.data;
    return thunkAPI.rejectWithValue(errorData);
  }
  const {accessToken} = loginResult.data;
  const tokenLocalStorage = useAsyncStorage('token');
  await tokenLocalStorage.setItem(accessToken).catch(() => {
    return thunkAPI.rejectWithValue(undefined);
  });
  return thunkAPI.fulfillWithValue(loginResult.data);
});
