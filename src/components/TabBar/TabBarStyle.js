import { StyleSheet, Dimensions } from 'react-native';

const windowHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#ac334a',
    height: windowHeight * 0.07,
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabOpacity: {
    flex: 1,
    alignItems: 'center',
    color: 'white',
    justifyContent: 'center',
    padding: windowHeight * 0.02,
    fontSize: windowHeight * 0.02,
  },
});

export default styles;
