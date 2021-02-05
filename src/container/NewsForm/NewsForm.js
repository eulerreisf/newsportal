import React from 'react';
import { Text, View, TextInput, Button } from 'react-native';
import { useForm, Controller } from 'react-hook-form';

import styles from './NewsFormStyles';

const NewsForm = props => {
  const { control, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <View style={styles.container}>
      <Text style={styles.titleStyle}>Cadastro de Noticias</Text>
      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <>
            <Text style={styles.labelStyle}>Titulo</Text>
            <TextInput
              style={styles.inputTitle}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          </>
        )}
        name="title"
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <>
            <Text style={styles.labelStyle}>Noticia</Text>
            <TextInput
              style={styles.inputDescriptionStyle}
              onBlur={onBlur}
              multiline
              onChangeText={value => onChange(value)}
              value={value}
            />
          </>
        )}
        name="description"
        defaultValue=""
      />

      <Controller
        control={control}
        render={({ onChange, onBlur, value }) => (
          <>
            <Text style={styles.labelStyle}>Autor</Text>
            <TextInput
              style={styles.inputAutor}
              onBlur={onBlur}
              onChangeText={value => onChange(value)}
              value={value}
            />
          </>
        )}
        name="autor"
        defaultValue=""
      />

      <Button title="Submit" onPress={handleSubmit(onSubmit)} />
    </View>
  );
};

export default NewsForm;
