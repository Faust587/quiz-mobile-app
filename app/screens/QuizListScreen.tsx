import React, {useEffect} from 'react';
import {
  FlatList,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  View,
} from 'react-native';
import {MainHeader} from '../components/main/MainHeader';
import {AppText} from '../UI/text/AppText';
import {StandardButton} from '../UI/buttons/StandardButton';
import {QuizList} from '../components/quizList/QuizList';

export const QuizListScreen = () => {
  useEffect(() => {}, []);
  return (
    <SafeAreaView style={styles.iosSafeArea}>
      <StatusBar
        translucent
        backgroundColor="#8b80b6"
        hidden={false}
        barStyle="light-content"
      />
      <MainHeader />
      <View style={styles.mainContent}>
        <View style={styles.mainHeader}>
          <AppText styles={styles.mainContentTitle}>Your quizzes:</AppText>
          <StandardButton>new quiz</StandardButton>
        </View>
        <QuizList />
      </View>
    </SafeAreaView>
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
  mainContent: {
    overflow: 'hidden',
    paddingHorizontal: 30,
    paddingTop: 30,
    height: '65%',
    backgroundColor: '#F6F7F7FF',
  },
  mainContentTitle: {
    fontSize: 20,
  },
  mainHeader: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    color: '#fff',
    fontSize: 32,
  },
  subtitle: {
    color: '#fff',
    fontSize: 20,
    paddingTop: 20,
  },
  iosSafeArea: {
    backgroundColor: '#8b80b6',
    height: '100%',
  },
});
