import {FC} from 'react';
import {StyleSheet, TouchableOpacity, View, Text} from 'react-native';

type TProps = {
  text: string;
  onPress: Function;
};

export const AuthButton: FC<TProps> = ({text, onPress}) => {
  return (
    <TouchableOpacity onPress={() => onPress()}>
      <View style={styles.buttonContainer}>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: '#101727',
    borderRadius: 20,
    paddingVertical: 20,
  },
  buttonText: {
    color: '#fff',
    fontFamily: 'JetBrains Mono',
    textAlign: 'center',
  },
});
