import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AppText} from '../../UI/text/AppText';
import {TQuizLite} from '../../store/entity/Quiz';
import {CopyIcon} from '../../UI/icons/CopyIcon';

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
        <View style={styles.parametersContainer}>
          <View style={styles.codeContainer}>
            <AppText>{`${code} `}</AppText>
            <CopyIcon width={15} height={15} />
          </View>
          <View>
            <AppText>3</AppText>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  itemWrapper: {
    margin: 20,
  },
  itemContainer: {
    padding: 20,
    height: 120,
    borderRadius: 10,
    backgroundColor: '#ffffff',
  },
  parametersContainer: {},
  codeContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
});
