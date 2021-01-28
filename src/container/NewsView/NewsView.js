import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './NewsViewStyles';

const NewsView = () => {
  return (
    <View style={styles.container}>
      <Text>
        News View
      </Text>
    </View>
  );
};

export default NewsView;