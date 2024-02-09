import React from 'react';
import {Image, Text, TextInput, TouchableOpacity, View} from 'react-native';
import style from './styles';

export interface Props {
  flightCode?: string | undefined;
  totalDuration?: string | undefined;
  depTime?: string | undefined;
  arrTime?: string | undefined;
  depLocation?: string | undefined;
  arrLocation?: string | undefined;
  fare?: string | undefined;
  airlineName?: string | undefined;
  onPress?: Function | undefined;
  containerStyle?: object | undefined;
}

const Card: React.FC<Props> = ({
  flightCode = 'IN 0000',
  totalDuration = '2 Hour 20 Min',
  depTime = '5: 30',
  arrTime = '9: 00',
  depLocation = 'DELHI',
  arrLocation = 'Mumbai',
  fare = '0000',
  airlineName = 'Air India',
  onPress = () => {},
  containerStyle,
}: Props) => {
  return (
    <TouchableOpacity
      style={[style.container, containerStyle]}
      onPress={() => onPress()}>
      <View style={style.innerView}>
        <View style={style.firstView}>
          <Text style={style.label}>{flightCode}</Text>
          <Text style={style.subLabel}>{totalDuration}</Text>
        </View>
        <View style={style.secondView}>
          <View style={{flex: 1}}>
            <Text style={style.time}>{depTime}</Text>
            <Text style={style.subLabel}>{depLocation}</Text>
          </View>
          <View style={style.iconView}>
            <Image
              style={style.icon}
              resizeMode="center"
              source={require('../../assets/icons/P3.png')}></Image>
          </View>
          <View style={{flex: 1}}>
            <Text style={[style.time, {textAlign: 'right'}]}>{arrTime}</Text>
            <Text style={[style.subLabel, {textAlign: 'right'}]}>
              {arrLocation}
            </Text>
          </View>
        </View>
        <View style={style.thirdView}>
          <Text style={[style.subLabel, {fontSize: 25}]}>{'Price:'}</Text>
          <Text style={style.time}>{' $' + fare}</Text>
        </View>
      </View>
      <Text style={[style.subLabel, {color: 'white'}]}>{airlineName}</Text>
    </TouchableOpacity>
  );
};

export default Card;
