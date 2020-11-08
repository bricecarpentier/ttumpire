import React from 'react';
import {
  ButtonProps,
  StyleProp,
  Text,
  TextStyle,
  TouchableHighlight,
  View,
  ViewStyle,
} from 'react-native';

type HomeScreenButtonProps = Readonly<ButtonProps> & {
  backgroundStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

const Button = (props: HomeScreenButtonProps) => {
  const { backgroundStyle, textStyle, title, onPress } = props;
  return (
    <TouchableHighlight onPress={onPress}>
      {/* prettier-ignore */}
      <View style={backgroundStyle}><Text style={textStyle}>{title}</Text></View>
    </TouchableHighlight>
  );
};

export default Button;
