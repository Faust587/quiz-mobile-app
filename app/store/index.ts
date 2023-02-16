import {store} from './store';
import {setAuthorized, setUnauthorized} from './slices/auth/authSlice';
import {clearQuizList} from './slices/quizList/quizListSlice';
import {checkIsAuth, login} from './slices/auth/authThunks';
import {fetchQuizList} from './slices/quizList/quizListThunks';

export {
  store,
  setUnauthorized,
  setAuthorized,
  login,
  checkIsAuth,
  fetchQuizList,
  clearQuizList,
};
