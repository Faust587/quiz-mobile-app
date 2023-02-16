import React, {FC} from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../../UI/text/AppText';
import {TQuizLite} from '../../store/entity/Quiz';

export const QuizListItem: FC<TQuizLite> = ({
  closed,
  onlyAuthUsers,
  name,
  code,
  author,
}) => {
  return (
    <View style={styles.itemWrapper}>
      <View style={styles.itemContainer}>
        <View></View>
        <View></View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    margin: 20,
    backgroundColor: 'red',
  },
  itemContainer: {
    padding: 20,
  },
});
