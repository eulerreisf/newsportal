import React from 'react';

import { View, Button } from 'react-native';

import LinearGradient from 'react-native-linear-gradient';

import Card from '../../components/Card';

import { styles } from './NewsListStyles';

import news from '../../../mocks/news';

const NewsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#677ef1', '#8c2a3e']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        {news.map(e => (
          <Card title={e.title} />
        ))}
        <Button
          title="Cadastro"
          onPress={() => navigation.navigate('Cadastro')}
        />
      </LinearGradient>
    </View>
  );
};

export default NewsList;
