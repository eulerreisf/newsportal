import { StyleSheet,Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    textAlign: 'center',
    backgroundColor: 'black',
    width: windowWidth * 0.9,
    height: windowHeight * 0.1,
    borderRadius: 10,
    margin: 10,
    padding: 10
  },
  textContainer: {
    textAlign: 'center'
  },
  text: {
    textAlign: 'center',
    color: 'white',
    fontSize: 30
  }
});

export default styles;