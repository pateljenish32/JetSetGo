import {View, Text, Image} from 'react-native';
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/native';
import style from './styles';

export default function SplashScreen() {
  const nav: any = useNavigation();

  useEffect(() => {
    const timer = setTimeout(goToDashboard, 2000);
    return () => clearTimeout(timer);
  }, []);

  const goToDashboard = () => {
    nav.navigate('dashboard');
  };
  return (
    <View style={style.container}>
      <Text style={style.txtJet}>Jet</Text>
      <Text style={style.txtJet}>Set</Text>
      <View style={style.goView}>
        <Text style={style.txtJet}>G</Text>
        <Image
          style={style.img}
          source={require('../../assets/icons/tour.png')}
        />
      </View>
    </View>
  );
}
