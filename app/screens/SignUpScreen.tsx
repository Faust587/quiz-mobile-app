import {StyleSheet, View} from 'react-native';
import {InputWithErrorIcon} from '../UI/inputs/InputWithErrorIcon';
import React, {useContext, useState} from 'react';
import {
  validateEmailHOC,
  validatePasswordHOC,
  validateRepeatPasswordHOC,
  validateUsernameHOC,
} from '../utils/Validation';
import {AuthButton} from '../UI/buttons/AuthButton';
import {AuthLayout} from '../layouts/AuthLayout';
import {AuthTitle} from '../components/AuthTitle';
import {AuthFooter} from '../components/AuthFooter';
import {isFailAuthResponse, requestRegistration} from '../api/auth';
import {AuthContext} from '../context/AuthContext';
import {AuthErrorsBlock} from '../components/AuthErrorsBlock';
import {useToken} from '../hooks/useToken';

export const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');

  const [isError, setIsError] = useState(false);
  const [errors, setErrors] = useState<string[]>([]);

  const {setIsAuth} = useContext(AuthContext);

  const {setToken} = useToken();

  const validateUsername = validateUsernameHOC(setIsError);
  const validateEmail = validateEmailHOC(setIsError);
  const validatePassword = validatePasswordHOC(setIsError);
  const validateRepeatPassword = validateRepeatPasswordHOC(setIsError);

  const submitData = async () => {
    const response = await requestRegistration(username, password, email);
    if (isFailAuthResponse(response)) {
      console.log(JSON.stringify(response, null, 2));
      setErrors(response.error || ['unknown error']);
    } else {
      console.log(JSON.stringify(response, null, 2));
      await setToken(response.accessToken);
      setIsAuth(true);
    }
  };

  return (
    <AuthLayout>
      <AuthTitle
        title="Create an account"
        subtitle="Let&#39;s start to create your quizzes"
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
            validateFunction={validateEmail}
            value={email}
            setValue={setEmail}
            placeholder="Email"
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
        <View style={styles.inputWrapper}>
          <InputWithErrorIcon
            validateFunction={validateRepeatPassword}
            value={repeatPass}
            setValue={setRepeatPass}
            placeholder="Repeat password"
            extraValue={password}
          />
        </View>
        {errors.length ? <AuthErrorsBlock errors={errors} /> : null}
        <View style={styles.buttonWrapper}>
          <AuthButton
            disabled={isError}
            text="Create an account"
            onPress={submitData}
          />
        </View>
        <View style={styles.footerWrapper}>
          <AuthFooter
            description="Already have an account?"
            linkText="Log In"
            navigateTo="SignIn"
          />
        </View>
      </View>
    </AuthLayout>
  );
};

const styles = StyleSheet.create({
  header: {
    height: '30%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  titleText: {
    fontSize: 30,
    fontFamily: 'JetBrains Mono',
  },
  subtitleTextWrapper: {
    paddingTop: 15,
  },
  subtitleText: {
    fontSize: 16,
    fontFamily: 'JetBrains Mono',
    color: '#7e7e7e',
  },
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
