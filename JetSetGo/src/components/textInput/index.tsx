import React from 'react';
import {Image, Keyboard, Text, TextInput, View} from 'react-native';
import style from './styles';

export interface Props {
  leftIcon?: object | undefined;
  topLable?: string | undefined;
  value?: string | undefined;
  onChangeText?: Function | undefined;
  containerStyle?: object | undefined;
}

const TextField: React.FC<Props> = ({
  leftIcon = require('../../assets/icons/left.png'),
  topLable = 'Text',
  value,
  onChangeText = () => {},
  containerStyle,
}: Props) => {
  return (
    <View style={[style.container, containerStyle]}>
      <View style={style.inputView}>
        <Image style={style.leftImg} resizeMode="contain" source={leftIcon} />
        <TextInput
          style={style.input}
          value={value}
          onChangeText={text => onChangeText(text)}
        />
      </View>
      <Text style={style.label}>{topLable}</Text>
    </View>
  );
};

export default TextField;
