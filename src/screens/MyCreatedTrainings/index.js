import React, {useState} from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import styles from './MyCreatedTrainingsStyle';

import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import {
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import MyCreatedTrainingsList from '../../assets/data/MyCreatedTrainings.json';

function MyCreatedTrainings({navigation}) {
  const [name, setName] = useState('');

  function create() {
    alert('Criar: ' + name);
  }

  function check() {
    alert('Verificar!');
  }

  function edit() {
    alert('Alterar!');
  }

  const text = 'Meus Treinos';

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#970A44" />
      <TopBar bartitle={text} navegacao={navigation} />
      <View style={styles.training}>
        <Text style={styles.createText}>Criar novo treino</Text>
        <View style={styles.options}>
          <TextInput
            style={styles.createName}
            placeholder="Escolha um nome para o seu treino"
            placeholderTextColor="#fffc"
            onChangeText={(text) => setName(text)}
          />
          <TouchableWithoutFeedback
            style={styles.btnDefault}
            onPress={() => create()}>
            <Text style={styles.btnText}>Criar</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
      <FlatList
        data={MyCreatedTrainingsList}
        renderItem={({item}) => (
          <View style={styles.training}>
            <Text style={styles.trainingName}>{item.nome_treino}</Text>
            <View style={styles.options}>
              <TouchableWithoutFeedback
                style={styles.btnDefault}
                onPress={() =>
                  navigation.navigate('VerifyTraining', {
                    nomeTreino: item.nome_treino,
                  })
                }>
                <Text style={styles.btnText}>Ver treino</Text>
              </TouchableWithoutFeedback>
              <TouchableWithoutFeedback
                style={styles.btnDefault}
                onPress={() => navigation.navigate('CreateTraining')}>
                <Text style={styles.btnText}>Editar treino</Text>
              </TouchableWithoutFeedback>
            </View>
          </View>
        )}
      />
      <BottomBar navegacao={navigation} />
    </SafeAreaView>
  );
}

export default MyCreatedTrainings;
