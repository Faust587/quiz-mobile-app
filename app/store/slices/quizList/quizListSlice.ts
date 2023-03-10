import {createSlice} from '@reduxjs/toolkit';
import {fetchQuizList} from './quizListThunks';
import {TQuizLite} from '../../entity/Quiz';

type TInitialState = {
  loading: boolean;
  errors: string | string[] | null;
  closedCount: number;
  onlyAuthCount: number;
  quizList: TQuizLite[];
};

const initialState: TInitialState = {
  loading: true,
  errors: null,
  closedCount: 0,
  onlyAuthCount: 0,
  quizList: [],
};

const quizListSlice = createSlice({
  name: 'quizList',
  initialState,
  reducers: {
    clearQuizList: state => {
      state.quizList = [];
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchQuizList.pending, state => {
      state.loading = true;
    });
    builder.addCase(fetchQuizList.rejected, (state, action) => {
      state.loading = false;
      state.errors = action.payload?.message || 'unknown error';
    });
    builder.addCase(fetchQuizList.fulfilled, (state, action) => {
      state.loading = false;
      state.closedCount = action.payload.filter(({closed}) => closed).length;
      state.onlyAuthCount = action.payload.filter(
        ({onlyAuthUsers}) => onlyAuthUsers,
      ).length;
      state.quizList = action.payload;
    });
  },
});

export const quizListReducer = quizListSlice.reducer;
export const {clearQuizList} = quizListSlice.caseReducers;
