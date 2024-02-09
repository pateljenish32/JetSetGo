import {StyleSheet} from 'react-native';

const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0C356A',
    justifyContent: 'center',
    alignItems: 'flex-end',
    padding: 10,
  },
  txtJet: {
    fontSize: 125,
    fontWeight: '900',
    textAlign: 'right',
    color: 'white',
    lineHeight: 120,
  },
  goView: {
    flexDirection: 'row',
  },
  img: {
    width: 110,
    height: 110,
    tintColor: 'white',
    marginTop: -10,
    marginRight: -5,
    marginLeft: 5,
  },
});

export default style;
