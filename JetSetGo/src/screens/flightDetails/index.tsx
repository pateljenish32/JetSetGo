import {View, Text, Image, Dimensions, Alert} from 'react-native';
import React from 'react';
import style from './styles';
import Button from '../../components/button';

export default function FlightDetails({route, navigation}: any) {
  const {flight} = route.params;
  return (
    <View style={style.container}>
      <Text style={style.air}>{flight.airlineName}</Text>
      <View style={style.secondView}>
        <View style={{flex: 1}}>
          <Text style={style.time}>{flight.depTime}</Text>
          <Text style={style.subLabel}>{flight.depLocation}</Text>
          <Text style={style.airPort}>{flight.depAirport}</Text>
        </View>
        <View style={style.iconView}>
          <Image
            style={style.icon}
            resizeMode="center"
            source={require('../../assets/icons/P3.png')}></Image>
        </View>
        <View style={{flex: 1}}>
          <Text style={[style.time, {textAlign: 'right'}]}>
            {flight.arrTime}
          </Text>
          <Text style={[style.subLabel, {textAlign: 'right'}]}>
            {flight.arrLocation}
          </Text>
          <Text style={[style.airPort, {textAlign: 'right'}]}>
            {flight.arrAirport}
          </Text>
        </View>
      </View>
      <View style={style.thirdView}>
        <Text style={style.date}>{flight.date}</Text>
        <Text style={style.date}>
          <Text style={[style.date, {color: 'gray'}]}>Price: </Text>
          {flight.fare}
        </Text>
      </View>
      <View style={[style.thirdView, {marginTop: 50}]}>
        <Button
          title="Cancel"
          containerStyle={{
            backgroundColor: '#E55604',
            width: Dimensions.get('window').width / 2 - 25,
          }}
          onPress={() => navigation.pop()}
        />
        <Button
          title="Book"
          containerStyle={{
            width: Dimensions.get('window').width / 2 - 25,
          }}
          onPress={() => {
            Alert.alert('Successfull', 'Thank you for choosing JetSetGo :)');
            navigation.pop(2);
          }}
        />
      </View>
    </View>
  );
}
