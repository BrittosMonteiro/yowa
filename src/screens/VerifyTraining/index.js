import React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';

import styles from './VerifyTrainingStyle';

import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';

import done from '../../assets/img/icons/done.png';
import fail from '../../assets/img/icons/fail.png';

import treinoA from '../../assets/data/treinoA.json';
import treinoB from '../../assets/data/treinoB.json';
import treinoC from '../../assets/data/treinoC.json';

function VerifyTraining({route, navigation}) {
  const {nomeTreino} = route.params;

  const text = nomeTreino;

  function deleteItem(item) {
    alert('Você clicou para deletar o exercício ' + item);
  }

  function iniciar() {
    alert('Iniciar o treino ' + text);
  }

  const treinoDeHoje = treinoB;

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#970A44" />
      <TopBar bartitle={text} navegacao={navigation} />
      <View style={styles.topOptions}>
        <Text style={styles.screenTitle}>Detalhes: {text}</Text>
        <TouchableWithoutFeedback
          style={styles.btnDefault}
          onPress={() =>
            navigation.navigate('InProgress', {
              nomeTreino: nomeTreino,
            })
          }>
          <Text style={styles.btnText}>Iniciar</Text>
        </TouchableWithoutFeedback>
      </View>
      <FlatList
        style={styles.exercises}
        data={treinoDeHoje}
        renderItem={({item}) => (
          <View style={styles.exercisesArea}>
            <View style={styles.exercisesName}>
              <Text style={styles.exercisesText}>
                {item.exercicio.nome_exercicio}
              </Text>
              <TouchableWithoutFeedback
                style={styles.btnDefault}
                onPress={() => deleteItem(item.exercicio.nome_exercicio)}>
                <Text style={styles.btnText}>Remover</Text>
              </TouchableWithoutFeedback>
            </View>
            <Text style={styles.exerciseDescription}>
              {item.conteudo_descricao}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <BottomBar navegacao={navigation} />
    </SafeAreaView>
  );
}

export default VerifyTraining;
