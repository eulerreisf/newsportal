
import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const App: () => React$Node = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.appName}>News Portal</Text>

      <Text style={styles.title}>Dia de sol em Floripa</Text>

      <Text style={styles.body}>
        Dias de Sol fazem a alegria da rapaziada depois da chuva o povo curte uma praia
      </Text>

      <Text style={styles.autor}>Euler das Virgens</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black'
  },
  appName: {
    padding: 40,
    fontSize: 50,
    textAlign: 'center',
    color: 'white'
  },
  title: {
    padding: 20,
    textAlign: 'center',
    fontSize: 30,
    color: 'white'
  },
  body: {
    fontSize: 20,
    padding: 20,
    color: 'white',
    textAlign: 'left'
  },
  autor: {
    padding: 10,
    fontSize: 15,
    color: 'white',
    textAlign: 'right'
  }
});

export default App;
