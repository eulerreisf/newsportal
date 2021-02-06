import React from 'react';
import { View, Text } from 'react-native';

import styles from './CardStyles';

const Card = ({ title }) => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>{title}</Text>
      </View>
    </View>
  );
};

export default Card;