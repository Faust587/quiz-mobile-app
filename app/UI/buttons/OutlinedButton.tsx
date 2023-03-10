import React, {FC} from 'react';
import {
  GestureResponderEvent,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import {AppText} from '../text/AppText';

type TProps = {
  children: string;
  onClick: (event: GestureResponderEvent) => void;
  active: boolean;
};

export const OutlinedButton: FC<TProps> = ({children, active, onClick}) => {
  return (
    <TouchableOpacity onPress={onClick}>
      <View
        style={[
          styles.button,
          active ? styles.activeButton : styles.inactiveButton,
        ]}>
        <AppText
          styles={[
            styles.text,
            active ? styles.activeText : styles.inactiveText,
          ]}>
          {children}
        </AppText>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignSelf: 'baseline',
    paddingHorizontal: 3,
    paddingVertical: 10,
    borderRadius: 4,
  },
  activeButton: {
    borderWidth: 1,
    borderColor: '#8b80b6',
    backgroundColor: '#e3ddff',
  },
  inactiveButton: {
    borderWidth: 1,
    borderColor: '#EFEFEF',
    backgroundColor: '#EFEFEF',
  },
  text: {
    fontSize: 10,
  },
  activeText: {
    color: '#8b80b6',
  },
  inactiveText: {
    color: '#000',
  },
});
