import React from 'react';

import { View, Text } from 'react-native';

import { styles } from './NewsListStyles';

const NewsList = () => {
  return (
    <View style={styles.container}>
      <Text>
        News List
      </Text>
    </View>
  );
};

export default NewsList;