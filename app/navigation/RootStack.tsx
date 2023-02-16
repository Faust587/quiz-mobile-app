import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import {useAppDispatch, useAppSelector} from '../hooks/useReduxStorage';
import {Text} from 'react-native';
import {MainStack} from './MainStack';
import {AuthStack} from './AuthStack';
import {checkIsAuth} from '../store';

export const Navigation = () => {
  const {isAuth, loading} = useAppSelector(state => state.auth);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(checkIsAuth());
  }, [dispatch]);

  return (
    <NavigationContainer>
      {loading ? <Text>LOADING</Text> : isAuth ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
};
