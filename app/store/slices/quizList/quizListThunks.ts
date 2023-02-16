import {createAsyncThunk} from '@reduxjs/toolkit';
import {api} from '../../../api';
import axios, {AxiosError} from 'axios';
import {TQuizLite} from '../../entity/Quiz';

interface IQuizListOnRejected {
  statusCode: number;
  message: string;
}

export const fetchQuizList = createAsyncThunk<
  TQuizLite[],
  void,
  {rejectValue: IQuizListOnRejected | undefined}
>('quizList/fetchQuizList', async function (data, thunkAPI) {
  const quizListResponse = await api.get<TQuizLite[]>('quiz/list');
  if (axios.isAxiosError(quizListResponse)) {
    const rejectedResponse =
      quizListResponse as AxiosError<IQuizListOnRejected>;
    const errorData = rejectedResponse.response?.data;
    return thunkAPI.rejectWithValue(errorData);
  }
  return thunkAPI.fulfillWithValue(quizListResponse.data);
});
