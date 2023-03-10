import React, {FC} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {AppText} from '../../UI/text/AppText';
import {AuthStackParamList} from '../../navigation/AuthStack';

type TProps = {
  description: string;
  linkText: string;
  navigateTo: 'SignIn' | 'SignUp';
};

export const AuthFooter: FC<TProps> = ({description, linkText, navigateTo}) => {
  const navigation = useNavigation<NavigationProp<AuthStackParamList>>();

  return (
    <View style={styles.footerContainer}>
      <AppText>{description}</AppText>
      <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
        <AppText styles={styles.color}>&#160;{linkText}</AppText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  color: {
    color: '#551A8B',
  },
});
