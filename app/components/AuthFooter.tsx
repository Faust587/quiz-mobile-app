import React, {FC} from 'react';
import {useNavigation, NavigationProp} from '@react-navigation/native';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import {RootStackParamList} from '../screens/RootStackParams';
import {AppText} from '../UI/text/AppText';

type TProps = {
  desctiption: string;
  linkText: string;
  navigateTo: 'SignIn' | 'SignUp';
};

export const AuthFooter: FC<TProps> = (
  {desctiption, linkText, navigateTo}
) => {
  const navigation = useNavigation<NavigationProp<RootStackParamList>>();

  return (
    <View style={styles.footerContainer}>
      <AppText>{desctiption}</AppText>
      <TouchableOpacity onPress={() => navigation.navigate(navigateTo)}>
        <AppText styles={{color: '#551A8B'}}>&#160;{linkText}</AppText>
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
});
