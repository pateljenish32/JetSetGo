import {StyleSheet, Dimensions} from 'react-native';
const width = Dimensions.get('window').width / 2;

const style = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginTop: 1,
  },
  text: {
    fontWeight: '700',
    padding: 10,
    textAlign: 'center',
    backgroundColor: 'white',
    marginBottom: 1,
  },
  sort: {
    borderRadius: 0,
    width: width,
    backgroundColor: '#0174BE',
  },
  filter: {
    borderRadius: 0,
    width: width,
    marginLeft: 1,
    backgroundColor: '#0174BE',
  },
  flatlist: {
    width: width,
    backgroundColor: '#B6BBC4',
  },
});

export default style;
