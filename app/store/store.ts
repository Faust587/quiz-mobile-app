import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './slices/auth/authSlice';
import {quizListReducer} from './slices/quizList/quizListSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    quizList: quizListReducer,
  },
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
