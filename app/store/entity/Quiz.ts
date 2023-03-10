import {TQuestion} from './Question';

export type TQuiz = {
  id: string;
  name: string;
  closed: boolean;
  onlyAuthUsers: boolean;
  code: string;
  author: string;
  lastUpdated: number;
  questions: TQuestion[];
};

export type TQuizLite = {
  id: string;
  name: string;
  closed: boolean;
  onlyAuthUsers: boolean;
  code: string;
  author: string;
};
