import {View, Text, SafeAreaView, Alert} from 'react-native';
import React, {useState} from 'react';
import TextField from '../../components/textInput';
import Button from '../../components/button';
import {useNavigation} from '@react-navigation/native';
import style from './styles';

export default function Dashboard() {
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const navigation: any = useNavigation();
  return (
    <SafeAreaView>
      <View style={style.container}>
        <TextField
          value={from}
          onChangeText={(text: any) => setFrom(text)}
          topLable="From"
          leftIcon={require('../../assets/icons/P1.png')}
        />
        <TextField
          value={to}
          onChangeText={(text: any) => setTo(text)}
          topLable="To"
          containerStyle={{marginTop: 20}}
          leftIcon={require('../../assets/icons/P2.png')}
        />
        <Button
          containerStyle={{marginTop: 50}}
          onPress={() => {
            if (from.trim() == '' || to.trim() == '') {
              Alert.alert('Please fill From and To locations!');
              return;
            }
            navigation.navigate('flightList', {
              from: from.toLowerCase(),
              to: to.toLowerCase(),
              showAll: false,
            });
          }}
          title="Search"
        />
      </View>
      <Button
        containerStyle={{marginTop: 20, marginHorizontal: 15}}
        onPress={() => {
          navigation.navigate('flightList', {
            from: '',
            to: '',
            showAll: true,
          });
        }}
        title="Show All Flights"
      />
    </SafeAreaView>
  );
}
