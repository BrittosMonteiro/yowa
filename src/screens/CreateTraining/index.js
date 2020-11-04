import React from 'react';
import {
  Image,
  KeyboardAvoidingView,
  SafeAreaView,
  StatusBar,
  Text,
  View,
} from 'react-native';

import styles from './CreateTrainingStyle';

import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';
import {
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import done from '../../assets/img/icons/done.png';
import fail from '../../assets/img/icons/fail.png';

import listOfExercises from '../../assets/data/listOfExercises.json';

function CreateTraining({navigation}) {
  const text = 'Adicionar exercícios';

  return (
    <KeyboardAvoidingView style={styles.container}>
      <StatusBar backgroundColor="#970A44" />
      <TopBar bartitle={text} navegacao={navigation} />
      <Text style={styles.screenTitle}>Personalize seu treino</Text>
      <FlatList
        style={styles.exercises}
        data={listOfExercises}
        renderItem={({item}) => (
          <View style={styles.exercisesArea}>
            <View style={styles.exercisesName}>
              <Text style={styles.exercisesText}>{item.nome_exercicio}</Text>
              <TouchableWithoutFeedback style={styles.btnDefault}>
                <Text style={styles.btnText}>Adicionar</Text>
              </TouchableWithoutFeedback>
            </View>
            <TextInput
              style={styles.exerciseDescription}
              placeholder="Descrição do seu exercício"
              placeholderTextColor="#fffc"
            />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <BottomBar navegacao={navigation} />
    </KeyboardAvoidingView>
  );
}

export default CreateTraining;
