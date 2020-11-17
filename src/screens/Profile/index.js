import React from 'react';
import {Image, SafeAreaView, StatusBar, Text, View} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import styles from './ProfileStyle';

import TopBar from '../../components/TopBar';
import BottomBar from '../../components/BottomBar';

import userPic from '../../assets/img/profile_pic_2.png';

function Dashboard({navigation}) {
  let text = 'Perfil';

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#970A44" />
      <TopBar bartitle={text} navegacao={navigation} />
      <ScrollView>
        <Text style={styles.screenTitle}>Minhas informações</Text>
        <View style={styles.imgArea}>
          <Image source={userPic} style={styles.profileImg} />
          <TouchableWithoutFeedback style={styles.btnAlterarImg}>
            <Text style={styles.btnTxt}>Alterar imagem</Text>
          </TouchableWithoutFeedback>
        </View>
        <View style={styles.informationArea}>
          <Text style={styles.informationLabel}>Nome</Text>
          <Text style={styles.informationText}>Lucas</Text>
        </View>
        <View style={styles.informationArea}>
          <Text style={styles.informationLabel}>Sobrenome</Text>
          <Text style={styles.informationText}>Brittos</Text>
        </View>
        <View style={styles.informationArea}>
          <Text style={styles.informationLabel}>E-mail</Text>
          <Text style={styles.informationText}>lucas@teste.com</Text>
        </View>
        <View style={styles.informationArea}>
          <Text style={styles.informationLabel}>Usuário</Text>
          <Text style={styles.informationText}>brittosmonteiro</Text>
        </View>
        <View style={styles.informationArea}>
          <Text style={styles.informationLabel}>Altura</Text>
          <Text style={styles.informationText}>167 cm</Text>
        </View>
        <View style={styles.informationArea}>
          <Text style={styles.informationLabel}>Peso</Text>
          <Text style={styles.informationText}>65,3 kg</Text>
        </View>
        <View style={styles.informationArea}>
          <Text style={styles.informationLabel}>IMC</Text>
          <Text style={styles.informationText}>24,7 (normal)</Text>
        </View>
        <View style={styles.informationArea}>
          <Text style={styles.informationLabel}>Gordura visceral</Text>
          <Text style={styles.informationText}>-</Text>
        </View>
        <View style={styles.informationArea}>
          <Text style={styles.informationLabel}>Músculo</Text>
          <Text style={styles.informationText}>-</Text>
        </View>
        <View style={styles.informationArea}>
          <Text style={styles.informationLabel}>Gordura</Text>
          <Text style={styles.informationText}>-</Text>
        </View>
        <View style={styles.btnArea}>
          <TouchableWithoutFeedback style={styles.btnAlterarImg}>
            <Text style={styles.btnTxt}>Salvar alterações</Text>
          </TouchableWithoutFeedback>
          <TouchableWithoutFeedback style={styles.btnAlterarImg}>
            <Text style={styles.btnTxt}>Apagar conta</Text>
          </TouchableWithoutFeedback>
        </View>
        <Text style={styles.alert}>
          Informações como gordura visceral, músculo e gordura são obtidas
          através de exame de bioimpedância. Para que seu IMC seja calculado
          corretamente, é necessário que mantenha sua altura e peso
          constantemente atualizados
        </Text>
      </ScrollView>
      <BottomBar navegacao={navigation} />
    </SafeAreaView>
  );
}

export default Dashboard;
