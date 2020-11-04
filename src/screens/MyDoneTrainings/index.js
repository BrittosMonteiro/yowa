import React from 'react';
import {SafeAreaView, StatusBar, Text, View} from 'react-native';

import styles from './MyDoneTrainingsStyle';

import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';

import MyDoneTrainingsList from '../../assets/data/MyDoneTrainings.json';

function MyDoneTrainings({navigation}) {
  const text = 'Treinos completos';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#970A44" />
      <TopBar bartitle={text} navegacao={navigation} />
      <Text style={styles.screenTitle}>
        Todos os seus treinos realizados até aqui
      </Text>
      <FlatList
        style={styles.trainingList}
        data={MyDoneTrainingsList}
        renderItem={({item}) => (
          <TouchableWithoutFeedback
            onPress={() =>
              navigation.navigate('Review', {
                nomeTreino: item.nome_treino,
                finalizados: [
                  'Alongamento',
                  'Agachamento',
                  'Pull over',
                  'Cruxifixo',
                ],
                tempoTotal: '0:00:00',
              })
            }>
            <View style={styles.trainingInformation}>
              <Text style={styles.trainingName}>{item.nome_treino}</Text>
              <View style={styles.trainingDetails}>
                <Text style={styles.trainingInfo}>{item.local_treino}</Text>
                <Text style={styles.trainingInfo}>{item.data_treino}</Text>
              </View>
            </View>
          </TouchableWithoutFeedback>
        )}
      />
      <BottomBar navegacao={navigation} />
    </SafeAreaView>
  );
}

export default MyDoneTrainings;
