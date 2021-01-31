import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet } from 'react-native';
import { NewsForm,NewsList } from './src/container';

const App: () => React$Node = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home">
        <Tab.Screen
          name="Home"
          component={NewsList}
        />
        <Tab.Screen name="Cadastro" component={NewsForm} />
      </Tab.Navigator>
    </NavigationContainer>
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
