import React, { useState, useEffect } from 'react';
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { FlatList, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import TopBar from '../../components/TopBar';

import styles from './InProgressTrainingStyle';

import treinoA from '../../assets/data/treinoA.json';
import treinoB from '../../assets/data/treinoB.json';
import treinoC from '../../assets/data/treinoC.json';

import done from '../../assets/img/icons/done.png';
import fail from '../../assets/img/icons/fail.png';

function InProgress({ route, navigation }) {
  const { nomeTreino } = route.params;
  const text = 'Execução';
  const treinoDeHoje = treinoB;

  const tempo = "0:00:00";

  const [finalizados, setFinalizados] = useState([]);

  const add = (item) => () => {
    if (finalizados.indexOf(item) == -1) {
      setFinalizados([...finalizados, item]);
    }
  }

  const remove = (item) => () => {
    if (finalizados.indexOf(item) != -1) {
      finalizados.splice(item, 1);
      setFinalizados([...finalizados]);
    }
  }

  return (
    <SafeAreaView style={styles.container}>
    <StatusBar backgroundColor="#970A44" />
      <TopBar bartitle={text} navegacao={navigation} />
      <Text style={styles.screenTitle}>Executando {nomeTreino}</Text>
      <Text style={styles.contador}>{tempo}</Text>

      {finalizados.length > 0 ?
        <View style={styles.finalizados}>
          <Text style={styles.finalizadosTitle}>Finalizados:</Text>
          {finalizados.map((item, key) => (
            <View style={styles.finalizadoArea} key={item}>
              <Text style={styles.finalizadosItem}>{item}</Text>
              <TouchableWithoutFeedback onPress={remove(item)}>
                <Image source={fail} />
              </TouchableWithoutFeedback>
            </View>
          ))}
        </View>
        :
        <>
        </>
      }

      <FlatList
        style={styles.exercises}
        data={treinoDeHoje}
        renderItem={({ item }) => (
          <View style={styles.exercisesArea}>
            <View style={styles.exercisesName}>
              <Text style={styles.exercisesText}>
                {item.exercicio.nome_exercicio}
              </Text>
              {finalizados.indexOf(item.exercicio.nome_exercicio) == -1 ?
                <TouchableWithoutFeedback
                  onPress={add(item.exercicio.nome_exercicio)}>
                  <Image source={done} />
                </TouchableWithoutFeedback>
                :
                <>
                </>
              }
            </View>
            <Text style={styles.exerciseDescription}>
              {item.conteudo_descricao}
            </Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableWithoutFeedback style={styles.btnDefault} onPress={() => navigation.navigate('Resume', {finalizados: finalizados, nomeTreino: nomeTreino, tempoTotal: tempo})}>
        <Text style={styles.btnText}>Finalizar</Text>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default InProgress;
