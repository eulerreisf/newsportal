import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NewsForm, NewsList } from './src/container';

import TabBar from './src/components/TabBar';

const App: () => React$Node = () => {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        tabBar={props => <TabBar {...props} />}
      >
        <Tab.Screen name="Home" component={NewsList} />
        <Tab.Screen name="Cadastro" component={NewsForm} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default App;
