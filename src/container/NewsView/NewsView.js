import React from 'react';

import { View, Text } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import { styles } from './NewsViewStyles';

const NewsView = () => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#677ef1', '#8c2a3e']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text>News View</Text>
      </LinearGradient>
    </View>
  );
};

export default NewsView;
