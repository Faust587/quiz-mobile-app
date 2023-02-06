import React, {FC} from 'react';
import {StyleProp, Text, TextStyle} from 'react-native';

type TProps = {
  children: React.ReactNode;
  styles?: StyleProp<TextStyle>;
};

export const AppText: FC<TProps> = ({children, styles}) => {
  return (
    <Text style={[styles, {fontFamily: 'JetBrains Mono'}]}>{children}</Text>
  );
};
