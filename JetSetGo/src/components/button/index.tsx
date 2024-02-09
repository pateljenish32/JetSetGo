import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import style from './styles';

export interface Props {
  title?: string | undefined;
  onPress?: Function | undefined;
  containerStyle?: object | undefined;
}

const Button: React.FC<Props> = ({
  title = 'Press',
  onPress = () => {},
  containerStyle,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={() => onPress()}
      style={[style.container, containerStyle]}>
      <Text style={style.label}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Button;
