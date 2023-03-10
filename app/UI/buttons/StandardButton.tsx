import {StyleSheet, TouchableOpacity} from 'react-native';
import {AppText} from '../text/AppText';
import React, {FC, ReactNode} from 'react';

type TProps = {
  children: ReactNode;
};

export const StandardButton: FC<TProps> = ({children}) => {
  return (
    <TouchableOpacity style={styles.buttonContainer}>
      <AppText styles={styles.text}>{children}</AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    padding: 10,
    alignSelf: 'baseline',
    backgroundColor: '#8b80b6',
    borderRadius: 3,
  },
  text: {
    color: '#fff',
  },
});
