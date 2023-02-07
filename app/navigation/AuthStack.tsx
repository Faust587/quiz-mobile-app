import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpScreen} from '../screens/SignUpScreen';
import {SignInScreen} from '../screens/SignInScreen';
import React from 'react';

export type AuthStackParamList = {
  SignUp: undefined;
  SignIn: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStack = () => {
  return (
    <Stack.Navigator
      initialRouteName="SignUp"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="SignUp" component={SignUpScreen} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  );
};
