import React from 'react';

import { View,Button } from 'react-native';

import Card from '../../components/Card';

import { styles } from './NewsListStyles';

import news from '../../../mocks/news';

const NewsList = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {news.map(e => <Card title={e.title} />)}
      <Button
        title="Cadastro"
        onPress={() => navigation.navigate('Cadastro')}
      />
    </View>
  );
};

export default NewsList;