import {Dispatch} from 'react';

/**
 * If username is not valid, return true
 * @param setError
 */
export const validateUsernameHOC = (setError: Dispatch<boolean>) => {
  return function (username: string) {
    const length = username.trim().length;
    const isError = length > 15 || length === 0;
    setError(isError);
    return isError;
  };
};

export const validateEmailHOC = (setError: Dispatch<boolean>) => {
  return function (email: string) {
    const emailRegExp = new RegExp(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
    );
    const isError = !emailRegExp.test(email);
    setError(isError);
    return isError;
  };
};

export const validatePasswordHOC = (setError: Dispatch<boolean>) => {
  return function (password: string) {
    const length = password.trim().length;
    const isError = length > 15 || length < 8;
    setError(isError);
    return isError;
  };
};

export const validateRepeatPasswordHOC = (setError: Dispatch<boolean>) => {
  return function (password1: string, password2?: string) {
    let isError: boolean;
    if (!password2) {
      console.log(password2);
      isError = true;
      setError(isError);
      return isError;
    }
    isError = password1.trim() !== password2.trim();
    console.log(isError);
    setError(isError);
    return isError;
  };
};
