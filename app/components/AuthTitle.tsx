import React, {FC} from 'react';
import {StyleSheet, Text, View} from 'react-native';

type TProps = {
  title: string;
  subtitle: string;
};

export const AuthTitle: FC<TProps> = ({title, subtitle}) => {
  return (
    <View style={styles.header}>
      <Text style={styles.titleText}>{title}</Text>
      <View style={styles.subtitleTextWrapper}>
        <Text style={styles.subtitleText}>{subtitle}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: '30%',
    display: 'flex',
    justifyContent: 'flex-end',
  },
  titleText: {
    fontSize: 30,
    fontFamily: 'JetBrains Mono',
  },
  subtitleTextWrapper: {
    paddingTop: 15,
  },
  subtitleText: {
    fontSize: 16,
    fontFamily: 'JetBrains Mono',
    color: '#7e7e7e',
  },
});
