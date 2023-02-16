import React from 'react';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../../UI/text/AppText';
import {FC} from 'react';

type TProps = {
  errors: string[];
};

export const AuthErrorsBlock: FC<TProps> = ({errors}) => {
  return (
    <View>
      {errors.map(error => {
        return (
          <AppText key={error} styles={styles.redText}>
            {error}
          </AppText>
        );
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  redText: {
    color: '#e44061',
    textAlign: 'center',
  },
});
