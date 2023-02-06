import React, {FC} from 'react';
import {SafeAreaView} from 'react-native-safe-area-context';
import {StyleSheet, View} from 'react-native';

type TProps = {
  children: React.ReactNode;
};

export const AuthLayout: FC<TProps> = ({children}) => {
  return (
    <SafeAreaView>
      <View style={styles.wrapper}>
        <View style={styles.container}>{children}</View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    paddingHorizontal: 30,
  },
  container: {
    height: '100%',
  },
});
