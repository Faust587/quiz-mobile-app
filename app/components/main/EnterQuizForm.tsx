import React from 'react';
import {StyleSheet, TextInput, TouchableOpacity, View} from 'react-native';
import {AppText} from '../../UI/text/AppText';

export const EnterQuizForm = () => {
  return (
    <View style={styles.formWrapper}>
      <View style={styles.formContainer}>
        <AppText styles={styles.title}>Enter quiz code</AppText>
        <AppText styles={styles.subtitle}>To start a quiz</AppText>
        <View style={styles.inputContainer}>
          <TextInput placeholder="Ex: cS09S" style={styles.input} />
          <TouchableOpacity style={styles.button}>
            <View>
              <AppText styles={styles.buttonText}>Enter</AppText>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  formWrapper: {
    marginHorizontal: 30,
    backgroundColor: '#fff',
    borderRadius: 10,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowColor: '#e5e5e5',
  },
  formContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
  },
  subtitle: {
    color: '#c3c7cf',
    paddingVertical: 10,
  },
  inputContainer: {
    backgroundColor: '#fafafa',
    borderRadius: 10,
    padding: 15,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  input: {
    height: 40,
    fontFamily: 'JetBrains Mono',
    width: '70%',
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    width: '25%',
    borderRadius: 10,
    backgroundColor: '#8b80b6',
  },
  buttonText: {
    color: '#fff',
  },
});
