import {createContext, Dispatch} from 'react';

type ContextType = {
  isAuth: boolean;
  setIsAuth: Dispatch<boolean>;
};

export const AuthContext = createContext({} as ContextType);
