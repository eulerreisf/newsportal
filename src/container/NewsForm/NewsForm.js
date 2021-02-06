import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import LinearGradient from 'react-native-linear-gradient';

import styles from './NewsFormStyles';

const NewsForm = props => {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View style={styles.container}>
      <LinearGradient
        colors={['#677ef1', '#8c2a3e']}
        style={styles.linearGradient}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
      >
        <Text style={styles.titleStyle}>Cadastro de Noticias</Text>
        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View>
              <Text style={styles.labelStyle}>Titulo</Text>
              <TextInput
                style={styles.inputTitle}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
              />
            </View>
          )}
          name="title"
          defaultValue=""
          rules={{ required: true }}
        />

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View>
              <Text style={styles.labelStyle}>Noticia</Text>
              <TextInput
                style={styles.inputDescriptionStyle}
                onBlur={onBlur}
                multiline
                onChangeText={value => onChange(value)}
                value={value}
                rules={{ required: true }}
              />
            </View>
          )}
          name="description"
          defaultValue=""
        />

        <Controller
          control={control}
          render={({ onChange, onBlur, value }) => (
            <View>
              <Text style={styles.labelStyle}>Autor</Text>
              <TextInput
                style={styles.inputAutor}
                onBlur={onBlur}
                onChangeText={value => onChange(value)}
                value={value}
                rules={{ required: true }}
              />
            </View>
          )}
          name="autor"
          defaultValue=""
        />

        <Button
          title="Cadastrar"
          color="white"
          onPress={handleSubmit(onSubmit)}
        />
      </LinearGradient>
    </View>
  );
};

export default NewsForm;
