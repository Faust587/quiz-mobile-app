import React, {useContext, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {AuthFooter} from '../components/AuthFooter';
import {AuthTitle} from '../components/AuthTitle';
import {AuthLayout} from '../layouts/AuthLayout';
import {AuthButton} from '../UI/buttons/AuthButton';
import {InputWithErrorIcon} from '../UI/inputs/InputWithErrorIcon';
import {validatePasswordHOC, validateUsernameHOC} from '../utils/Validation';
import {isFailAuthResponse, requestLogin} from '../api/auth';
import {AuthContext} from '../context/AuthContext';
import {useToken} from '../hooks/useToken';

export const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const {setIsAuth} = useContext(AuthContext);

  const {setToken} = useToken();

  const [isError, setIsError] = useState(false);

  const submitData = async () => {
    const response = await requestLogin(username, password);
    if (isFailAuthResponse(response)) {
      console.log(JSON.stringify(response, null, 2));
    } else {
      console.log(JSON.stringify(response, null, 2));
      await setToken(response.accessToken);
      setIsAuth(true);
    }
  };

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
