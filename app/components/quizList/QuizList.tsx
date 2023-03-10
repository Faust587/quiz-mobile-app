import {ScrollView, StyleSheet, TextInput, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useAppDispatch, useAppSelector} from '../../hooks';
import {fetchQuizList} from '../../store';
import {AppText} from '../../UI/text/AppText';
import {OutlinedButton} from '../../UI/buttons/OutlinedButton';
import {QuizListItem} from './QuizListItem';

export const QuizList = () => {
  const dispatch = useAppDispatch();
  const {quizList, loading, errors, closedCount, onlyAuthCount} =
    useAppSelector(state => state.quizList);

  const [isOnlyAuthFilter, setIsOnlyAuthFilter] = useState(false);
  const [isClosedFilter, setIsClosedFilter] = useState(false);

  const [isInputActive, setIsInputActive] = useState(false);

  useEffect(() => {
    dispatch(fetchQuizList());
  }, [dispatch]);

  return (
    <View style={styles.quizListWrapper}>
      <View style={styles.filterContainer}>
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonWrapper}>
            <OutlinedButton
              onClick={() => setIsOnlyAuthFilter(prevState => !prevState)}
              active={isOnlyAuthFilter}>
              {`only auth (${onlyAuthCount})`}
            </OutlinedButton>
          </View>
          <OutlinedButton
            onClick={() => setIsClosedFilter(prevState => !prevState)}
            active={isClosedFilter}>
            {`closed (${closedCount})`}
          </OutlinedButton>
        </View>
        <TextInput
          style={[
            styles.searchInput,
            isInputActive ? styles.searchBorderActive : {},
          ]}
          onFocus={() => setIsInputActive(true)}
          onBlur={() => setIsInputActive(false)}
          placeholder={'search'}
        />
      </View>
      <ScrollView
        style={styles.quizListWrapper}
        showsVerticalScrollIndicator={false}>
        {quizList.map(({id, name, onlyAuthUsers, closed, code, author}) => {
          return (
            <QuizListItem
              key={id}
              id={id}
              name={name}
              closed={closed}
              onlyAuthUsers={onlyAuthUsers}
              code={code}
              author={author}
            />
          );
        })}
        <View style={{height: 100}} />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  filterContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  buttonsContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
  buttonWrapper: {
    paddingRight: 10,
  },
  quizListWrapper: {
    marginTop: 20,
  },
  searchInput: {
    paddingLeft: 10,
    width: '40%',
    borderWidth: 2,
    borderRadius: 4,
    borderColor: '#bdb3dc',
    fontFamily: 'JetBrains Mono',
  },
  searchBorderActive: {
    borderColor: '#8b80b6',
  },
});
