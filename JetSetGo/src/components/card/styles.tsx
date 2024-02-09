import {StyleSheet, Dimensions} from 'react-native';

const style = StyleSheet.create({
  container: {
    height: 190,
    //justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0C356A',
    borderRadius: 10,
    marginTop: 15,
    marginHorizontal: 15,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 5,
    shadowOpacity: 0.2,
  },
  innerView: {
    height: 170,
    width: '100%',
    borderRadius: 10,
    backgroundColor: 'white',
    padding: 10,
  },
  firstView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  secondView: {
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginVertical: 20,
  },
  thirdView: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
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
    color: 'gray',
  },
  time: {
    fontSize: 25,
    fontWeight: '600',
  },
});

export default style;
