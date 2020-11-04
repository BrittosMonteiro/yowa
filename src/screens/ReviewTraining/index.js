import React, {useState, useEffect} from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {FlatList, TouchableWithoutFeedback} from 'react-native-gesture-handler';
import TopBar from '../../components/TopBar';

import styles from './ReviewTrainingStyle';

import done from '../../assets/img/icons/done.png';
import fail from '../../assets/img/icons/fail.png';
import tempoIcon from '../../assets/img/icons/tempoResumo.png';

function ReviewTraining({route, navigation}) {
  const {nomeTreino, finalizados, tempoTotal} = route.params;
  const text = 'Revisar treino';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#970A44" />
      <TopBar bartitle={text} navegacao={navigation} />
      <Text style={styles.screenTitle}>Revisão {nomeTreino}</Text>
      <View style={styles.tempoArea}>
        <Image source={tempoIcon} />
        <Text style={styles.tempo}>{tempoTotal}</Text>
      </View>
      {finalizados.length > 0 ? (
        <Text style={styles.listaTitle}>Finalizados: {finalizados.length}</Text>
      ) : (
        <></>
      )}
      <FlatList
        style={styles.listas}
        data={finalizados}
        renderItem={({item}) => (
          <View style={styles.listaItem}>
            <Text style={styles.listaItemNome}>{item}</Text>
            <Image source={done} />
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
      <TouchableWithoutFeedback
        style={styles.btnDefault}
        onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.btnText}>Concluir</Text>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
}

export default ReviewTraining;
