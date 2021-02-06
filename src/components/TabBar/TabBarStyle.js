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
    padding: 20,
  },
});

export default styles;
