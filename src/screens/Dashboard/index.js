import React from 'react';
import { Image, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import BottomBar from '../../components/BottomBar';

import styles from './DashboardStyle';
import TopBar from '../../components/TopBar';
import MyDoneTrainings from '../../assets/data/MyDoneTrainings.json';
import done from '../../assets/img/icons/done.png';
import fail from '../../assets/img/icons/fail.png';

function Dashboard({ navigation }) {
  let text = 'Olá, brittosmonteiro';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#970A44" />
      <TopBar bartitle={text} navegacao={navigation} />
      <Text style={styles.screenTitle}>
        Acompanhe sua evolução
      </Text>
      <View style={styles.topInformation}>
        <View style={styles.informationBlock}>
          <Text style={styles.blockTitle}>
            Treinos
          </Text>
          <Text style={styles.blockInformation}>
            4
          </Text>
        </View>
        <View style={styles.informationBlock}>
          <Text style={styles.blockTitle}>
            Meta
          </Text>
          <Text style={styles.blockInformation}>
            20%
          </Text>
        </View>
        <View style={styles.informationBlock}>
          <Text style={styles.blockTitle}>
            Peso
          </Text>
          <Text style={styles.blockInformation}>
            65,3 kg
          </Text>
        </View>
        <View style={styles.informationBlock}>
          <Text style={styles.blockTitle}>
            Variação
          </Text>
          <Text style={styles.blockInformation}>
            - 3,1 kg
          </Text>
        </View>
      </View>
      <Text style={styles.screenTitle}>Últimos treinos</Text>
      <FlatList
        style={styles.training}
        data={MyDoneTrainings}
        renderItem={({ item }) => (
          <View style={styles.trainingItem}>
            <Text style={styles.trainingTitle}>
              {item.nome_treino}
            </Text>
            <View style={styles.trainingLarge}>
              <Text style={styles.trainingPlaceAndDate}>
                {item.local_treino}
              </Text>
              <Text style={styles.trainingPlaceAndDate}>
                {item.data_treino}
              </Text>
            </View>
            <View style={styles.trainingTasks}>
              <Image source={done} />
              <Text style={styles.trainingTask}>
                Completos: {item.completos}
              </Text>
            </View>
            <View style={styles.trainingTasks}>
              <Image source={fail} />
              <Text style={styles.trainingTask}>
                Incompletos: {item.incompletos}
              </Text>
            </View>
          </View>
        )}
      />
      <BottomBar navegacao={navigation} />
    </SafeAreaView>
  );
}

export default Dashboard;
