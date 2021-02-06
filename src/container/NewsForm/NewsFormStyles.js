import { StyleSheet, Dimensions } from 'react-native';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  linearGradient: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    height: windowHeight,
    width: windowWidth,
  },
  titleStyle: {
    color: 'white',
    textAlign: 'center',
    fontSize: 40,
    marginBottom: 20,
  },
  labelStyle: {
    color: 'white',
    fontSize: 20,
    marginBottom: 10,
  },
  inputTitle: {
    borderColor: 'white',
    borderWidth: 1,
    width: windowWidth * 0.8,
    color: 'white',
    marginBottom: 20,
    height: windowHeight * 0.05,
    fontSize: 20,
  },
  inputDescriptionStyle: {
    borderColor: 'white',
    borderWidth: 1,
    fontSize: 20,
    padding: 10,
    width: windowWidth * 0.8,
    height: windowHeight * 0.4,
    color: 'white',
    marginBottom: 20,
  },
  inputAutor: {
    borderColor: 'white',
    borderWidth: 1,
    width: windowWidth * 0.8,
    height: windowHeight * 0.05,
    color: 'white',
    fontSize: 20,
    marginBottom: 20,
  },
  button: {
    backgroundColor: 'white',
  },
});

export default styles;
