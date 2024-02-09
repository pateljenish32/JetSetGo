import {StyleSheet, Dimensions} from 'react-native';

const screenWidth = Dimensions.get('window').width;
const style = StyleSheet.create({
  container: {
    height: 60,
    width: '100%',
  },
  inputView: {
    borderColor: '#B4B4B8',
    borderWidth: 1,
    flex: 1,
    marginTop: 10,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  leftImg: {
    height: 30,
    width: 30,
    marginLeft: 15,
    tintColor: 'black',
  },
  input: {
    height: 25,
    marginLeft: 5,
    width: screenWidth - 80,
  },
  label: {
    left: 15,
    backgroundColor: 'white',
    alignSelf: 'flex-start',
    position: 'absolute',
    height: 20,
    paddingHorizontal: 4,
  },
});

export default style;
