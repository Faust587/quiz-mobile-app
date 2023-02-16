import Svg, {Rect} from 'react-native-svg';
import {StyleSheet, View} from 'react-native';
import {AppText} from '../../UI/text/AppText';
import {ProfileImage} from '../../UI/images/ProfileImage';
import React from 'react';
import {EnterQuizForm} from './EnterQuizForm';

export const MainHeader = () => {
  return (
    <View style={styles.headerWrapper}>
      <Svg style={{position: 'absolute'}} width="100%" height="65%">
        <Rect
          width="100%"
          height="100%"
          x="0"
          y="0"
          fill="#8b80b6"
          stroke="none"
        />
      </Svg>
      <View style={styles.headerTitleWrapper}>
        <View>
          <AppText styles={styles.title}>Let's play</AppText>
          <AppText styles={styles.subtitle}>And be the first!</AppText>
        </View>
        <ProfileImage size={80} />
      </View>
      <EnterQuizForm />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: '40%',
    backgroundColor: '#F6F7F7FF',
    position: 'relative',
  },
  headerTitleWrapper: {
    marginHorizontal: 30,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    color: '#fff',
    fontSize: 32,
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 20,
    paddingBottom: 35,
  },
});
