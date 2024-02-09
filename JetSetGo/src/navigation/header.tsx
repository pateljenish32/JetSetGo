import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import React from 'react';
import {useNavigation} from '@react-navigation/native';

const Header = ({
  title,
  isBackButton,
  isRightButton,
  leftIconSource,
  rightIconSource,
  onLeftPress,
  onRightPress,
}: any) => {
  const nav: any = useNavigation();
  const backButtonClick = () => {
    nav.pop();
  };
  return (
    <View style={style.header}>
      {isBackButton ? (
        <TouchableOpacity
          style={[style.bacButtonView, {paddingLeft: 10}]}
          onPress={onLeftPress || backButtonClick}>
          <Image
            style={style.backIcon}
            resizeMode={'contain'}
            source={leftIconSource || require('../assets/icons/left.png')}
          />
        </TouchableOpacity>
      ) : (
        <Text style={{width: 30}}></Text>
      )}
      <View>
        <Text style={style.headerText}>{title}</Text>
      </View>
      {isRightButton ? (
        <TouchableOpacity onPress={onRightPress} style={style.bacButtonView}>
          <Image
            style={style.backIcon}
            resizeMode={'contain'}
            source={rightIconSource || require('../assets/icons/left.png')}
          />
        </TouchableOpacity>
      ) : (
        <Text style={{width: 30}}></Text>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  header: {
    height: Platform.OS === 'ios' ? 100 : 75,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    backgroundColor: '#0C356A',
    paddingTop: Platform.OS === 'ios' ? 50 : 30,
  },
  headerText: {
    fontSize: 20,
    fontWeight: '600',
    color: 'white',
    letterSpacing: 1,
  },
  bacButtonView: {
    height: 30,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backIcon: {
    height: 30,
    width: 30,
    position: 'absolute',
    tintColor: 'white',
  },
});

export default Header;
