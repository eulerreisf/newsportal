import React from 'react';

import { View, Text, Button } from 'react-native';

import { styles } from './NewsListStyles';

const NewsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text>
        News List
      </Text>
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
};

export default NewsList;