import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {QuizListScreen} from '../screens/QuizListScreen';

export const MainStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="QuizList" component={QuizListScreen} />
    </Stack.Navigator>
  );
};
