import {
  SafeAreaView,
  StyleSheet,
  Text,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {InputWithErrorIcon} from '../UI/inputs/InputWithErrorIcon';
import {useState} from 'react';
import {
  validateEmail,
  validatePassword,
  validateRepeatPassword,
  validateUsername,
} from '../utils/Validation';
import {AuthButton} from '../UI/buttons/AuthButton';
import {AppText} from '../UI/text/AppText';
import {RootStackParamList} from './RootStackParams';
import {AuthLayout} from '../layouts/AuthLayout';
import {AuthTitle} from '../components/AuthTitle';
import { AuthFooter } from '../components/AuthFooter';

export const SignUpScreen = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPass, setRepeatPass] = useState('');

  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  const submitData = () => {
    console.log(username);
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
          />
        </View>
        <View style={styles.buttonWrapper}>
          <AuthButton text="Create an account" onPress={submitData} />
        </View>
        <View style={styles.footerWrapper}>
          <AuthFooter desctiption='Already have an account?' linkText='Log In' navigateTo='SignIn' />
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
    marginTop: 50,
  },
  footerWrapper: {
    marginTop: 50,
  },
});
