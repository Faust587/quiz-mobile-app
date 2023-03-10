import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks';
import {Text} from 'react-native';
import {MainStack} from './MainStack';
import {AuthStack} from './AuthStack';
import {checkIsAuth} from '../store';
import {API_URL} from '@env';

export const Navigation = () => {
  const {isAuth, loading} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();
  console.log('config', API_URL);
  useEffect(() => {
    dispatch(checkIsAuth());
  }, [dispatch]);
  return (
    <NavigationContainer>
      {loading ? <Text>LOADING</Text> : isAuth ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
