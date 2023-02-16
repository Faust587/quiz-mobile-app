import {Image, ImageStyle, StyleProp, StyleSheet} from 'react-native';
import {FC} from 'react';

type TProps = {
  size: number;
  styles?: StyleProp<ImageStyle>;
};

export const ProfileImage: FC<TProps> = ({size, styles}) => {
  const imageStyles = StyleSheet.create({
    sizes: {
      width: size,
      height: size,
    },
  });

  return (
    <Image
      style={[styles, imageStyles.sizes]}
      source={require('../../../assets/images/user-icon.png')}
    />
  );
};
