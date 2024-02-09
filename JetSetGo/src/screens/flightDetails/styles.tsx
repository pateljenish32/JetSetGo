import {StyleSheet, Dimensions} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    //justifyContent: 'center',
    alignItems: 'center',
    padding: 15,
    backgroundColor: 'white',
  },
  innerView: {
    height: 170,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  secondView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  iconView: {
    height: 1,
    width: 150,
    backgroundColor: '#B6BBC4',
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    flex: 1,
  },
  icon: {
    backgroundColor: '#0174BE',
    height: 30,
    width: 30,
    borderRadius: 15,
    position: 'absolute',
    tintColor: 'white',
  },
  label: {
    fontSize: 15,
    fontWeight: '600',
  },
  subLabel: {
    fontSize: 15,
    fontWeight: '600',
    color: '#424769',
  },
  time: {
    fontSize: 25,
    fontWeight: '600',
  },
  air: {
    fontSize: 40,
    fontWeight: '900',
    marginVertical: 30,
    letterSpacing: 1,
    color: '#0174BE',
  },
  airPort: {
    fontSize: 14,
    fontWeight: '500',
    color: 'gray',
  },
  date: {
    fontSize: 25,
    fontWeight: '600',
  },
  thirdView: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
    marginTop: 20,
  },
});

export default style;
