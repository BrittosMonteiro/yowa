import React from 'react';
import {Image, Text, View} from 'react-native';

import styles from './TopBarStyle';

import imgPerfil from '../../assets/img/profile_pic_2.png';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

function TopBar(props) {
  return (
    <View style={styles.bar}>
      <Text style={styles.barTitle}>{props.bartitle}</Text>
      <TouchableWithoutFeedback
        onPress={() => props.navegacao.navigate('Perfil')}>
        <Image source={imgPerfil} style={styles.barImg} />
      </TouchableWithoutFeedback>
    </View>
  );
}

export default TopBar;
