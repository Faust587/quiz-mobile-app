import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import { AuthFooter } from '../components/AuthFooter';
import { AuthTitle } from '../components/AuthTitle';
import {AuthLayout} from '../layouts/AuthLayout';
import { AuthButton } from '../UI/buttons/AuthButton';
import { InputWithErrorIcon } from '../UI/inputs/InputWithErrorIcon';
import { validatePassword, validateUsername } from '../utils/Validation';

export const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submitData = () => {
    console.log(username);
  }

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
          <AuthButton text="Log In" onPress={submitData} />
        </View>
        <View style={styles.footerWrapper}>
          <AuthFooter desctiption='Don&#39;t have an account?' linkText='Sign Up' navigateTo='SignUp' />
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
    marginTop: 50,
  },
  footerWrapper: {
    marginTop: 50,
  },
});
