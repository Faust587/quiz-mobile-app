import React, {FC} from 'react';
import Svg, {Path} from 'react-native-svg';

type TProps = {
  size: number;
};

export const ErrorIcon: FC<TProps> = ({size}) => {
  return (
    <Svg viewBox="0 0 612 792" width={size} height={size}>
      <Path
        fill="#E44061"
        d="M562,396c0-141.4-114.6-256-256-256S50,254.6,50,396s114.6,256,256,256S562,537.4,562,396L562,396z M356.8,396   L475,514.2L424.2,565L306,446.8L187.8,565L137,514.2L255.2,396L137,277.8l50.8-50.8L306,345.2L424.2,227l50.8,50.8L356.8,396   L356.8,396z"
      />
    </Svg>
  );
};
