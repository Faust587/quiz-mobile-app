import React, {useEffect, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {AuthStack} from './navigation/AuthStack';
import {AuthContext} from './context/AuthContext';
import {useAsyncStorage} from '@react-native-async-storage/async-storage';
import {MainStack} from './navigation/MainStack';

function App(): JSX.Element {
  const [isAuth, setIsAuth] = useState(false);

  const asyncStorage = useAsyncStorage('token');

  useEffect(() => {
    asyncStorage.getItem().then(token => {
      if (token && token.trim().length > 0) {
        setIsAuth(true);
      } else {
        setIsAuth(false);
      }
    });
  }, [asyncStorage]);

  return (
    <NavigationContainer>
      <AuthContext.Provider value={{isAuth, setIsAuth}}>
        {isAuth ? <MainStack /> : <AuthStack />}
      </AuthContext.Provider>
    </NavigationContainer>
  );
}

export default App;
