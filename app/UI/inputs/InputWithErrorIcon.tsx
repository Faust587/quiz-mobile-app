import React, {Dispatch, FC, useState} from 'react';
import {StyleSheet, TextInput, View} from 'react-native';
import {ErrorIcon} from '../icons/ErrorIcon';

type TProps = {
  validateFunction: (value1: string, value2?: string) => boolean;
  placeholder: string;
  value: string;
  setValue: Dispatch<string>;
};

export const InputWithErrorIcon: FC<TProps> = ({
  value,
  setValue,
  placeholder,
  validateFunction,
}) => {
  const [isError, setIsError] = useState(false);
  return (
    <View style={styles.inputContainer}>
      <TextInput
        value={value}
        onChangeText={setValue}
        style={styles.input}
        placeholder={placeholder}
        onBlur={() => setIsError(validateFunction(value))}
      />
      {isError ? <ErrorIcon size={30} /> : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    fontSize: 16,
    fontFamily: 'JetBrains Mono',
    width: '90%',
  },
  inputContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingBottom: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: '#b2b2b2',
  },
});