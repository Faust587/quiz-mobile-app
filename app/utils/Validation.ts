/**
 * If username is not valid, return true
 * @param value
 */
export const validateUsername = (username: string) => {
  const length = username.trim().length;
  return length > 15 || length === 0;
};

export const validateEmail = (email: string) => {
  const emailRegExp = new RegExp(
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
  );
  return !emailRegExp.test(email);
};

export const validatePassword = (password: string) => {
  const length = password.trim().length;
  return length > 15 || length < 8;
};

export const validateRepeatPassword = (
  password1: string,
  password2?: string,
) => {
  if (!password2) {
    return false;
  }
  return password1.trim() !== password2.trim();
};
