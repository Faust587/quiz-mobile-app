import {createSlice} from '@reduxjs/toolkit';
import {checkIsAuth, login} from './authThunks';

type TInitialState = {
  isAuth: boolean;
  loading: boolean;
  error: string | string[] | null;
};

const initialState: TInitialState = {
  isAuth: false,
  loading: true,
  error: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthorized: state => {
      state.isAuth = true;
    },
    setUnauthorized: state => {
      state.isAuth = false;
    },
  },
  extraReducers: builder => {
    builder.addCase(checkIsAuth.pending, state => {
      state.loading = true;
    });
    builder.addCase(checkIsAuth.fulfilled, state => {
      state.isAuth = true;
      state.loading = false;
    });
    builder.addCase(checkIsAuth.rejected, state => {
      state.isAuth = false;
      state.loading = false;
    });
    builder.addCase(login.pending, state => {
      state.loading = true;
    });
    builder.addCase(login.rejected, (state, action) => {
      state.loading = false;
      if (!action.payload) {
        state.error = 'unknown error';
      } else {
        state.error = action.payload.message;
      }
    });
    builder.addCase(login.fulfilled, state => {
      state.isAuth = true;
      state.loading = false;
    });
  },
});

export const {setAuthorized, setUnauthorized} = authSlice.caseReducers;
export const authReducer = authSlice.reducer;
