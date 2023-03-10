import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AuthFooter} from '../components/auth/AuthFooter';
import {AuthTitle} from '../components/auth/AuthTitle';
import {AuthLayout} from '../layouts/AuthLayout';
import {AuthButton} from '../UI/buttons/AuthButton';
import {InputWithErrorIcon} from '../UI/inputs/InputWithErrorIcon';
import {validatePasswordHOC, validateUsernameHOC} from '../utils/Validation';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxStorage';
import {login} from '../store';

export const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const [isError, setIsError] = useState(false);

  const dispatch = useAppDispatch();
  const {error} = useAppSelector(state => state.auth);
  const submitData = async () => {
    dispatch(login({username, password}));
  };

  useEffect(() => {
    setIsError(!!error);
  }, [error]);

  const validateUsername = validateUsernameHOC(setIsError);
  const validatePassword = validatePasswordHOC(setIsError);

  return (
    <AuthLayout>
      <AuthTitle
        title="Log in to your account"
        subtitle="Welcome back to your account"
      />
      <View style={styles.formWrapper}>
        <View style={styles.inputWrapper}>
          <InputWithErrorIcon
            validateFunction={validateUsername}
            value={username}
            setValue={setUsername}
            placeholder="Username"
          />
        </View>
        <View style={styles.inputWrapper}>
          <InputWithErrorIcon
            secure={true}
            validateFunction={validatePassword}
            value={password}
            setValue={setPassword}
            placeholder="Password"
          />
        </View>
        <View style={styles.buttonWrapper}>
          <AuthButton disabled={isError} text="Log In" onPress={submitData} />
        </View>
        <View style={styles.footerWrapper}>
          <AuthFooter
            description="Don&#39;t have an account?"
            linkText="Sign Up"
            navigateTo="SignUp"
          />
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    paddingTop: 50,
  },
  inputWrapper: {
    marginBottom: 30,
  },
  buttonWrapper: {
    marginTop: 30,
  },
  footerWrapper: {
    marginTop: 30,
  },
});
