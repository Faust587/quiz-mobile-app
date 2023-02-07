import {api} from './index';
import axios, {AxiosError} from 'axios';

type LoginResponse = {
  ok: boolean;
  user: {
    _id: string;
    username: string;
    email: string;
    activated: boolean;
  };
  accessToken: string;
};

type FailResponse = {
  ok: boolean;
  statusCode: number | undefined;
  message: string | undefined;
  error: string[] | undefined;
};

export const requestRegistration = async (
  username: string,
  password: string,
  email: string,
): Promise<LoginResponse | FailResponse> => {
  const registration = await api.post<LoginResponse>('/auth/register', {
    username,
    password,
    email,
  });
  if (axios.isAxiosError(registration)) {
    const error = registration as AxiosError<FailResponse>;
    return {
      ok: false,
      statusCode: error.response?.data.statusCode,
      message: error.response?.data.message,
      error: error.response?.data.error,
    };
  }
  return {...registration.data, ok: true};
};

export const requestLogin = async (
  username: string,
  password: string,
): Promise<LoginResponse | FailResponse> => {
  const login = await api.post<LoginResponse>('auth/login', {
    username,
    password,
  });
  if (axios.isAxiosError(login)) {
    const error = login as AxiosError<FailResponse>;
    return {
      ok: false,
      statusCode: error.response?.data.statusCode,
      message: error.response?.data.message,
      error: error.response?.data.error,
    };
  }
  return {...login.data, ok: true};
};

export function isFailAuthResponse(
  response: LoginResponse | FailResponse,
): response is FailResponse {
  return !response.ok;
}
