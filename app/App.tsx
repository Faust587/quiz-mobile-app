import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {SignUpScreen} from './screens/SignUpScreen';
import {SignInScreen} from './screens/SignInScreen';

function App(): JSX.Element {
  const RootStack = createNativeStackNavigator();

  return (
    <NavigationContainer>
      <RootStack.Navigator
        initialRouteName="SignUp"
        screenOptions={{headerShown: false}}>
        <RootStack.Screen name="SignUp" component={SignUpScreen} />
        <RootStack.Screen name="SignIn" component={SignInScreen} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
