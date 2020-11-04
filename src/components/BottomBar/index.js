import React from 'react';
import {Image, Text, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';

import styles from './BottomBarStyle';

import dash from '../../assets/img/icons/dash.png';
import play from '../../assets/img/icons/start.png';
import list from '../../assets/img/icons/list.png';

function BottomBar(props) {

  return (
    <View style={styles.bar}>
      <TouchableWithoutFeedback
        onPress={() => props.navegacao.navigate('Dashboard')}>
        <Image source={dash} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => props.navegacao.navigate('MyCreatedTrainings')}>
        <Image source={play} />
      </TouchableWithoutFeedback>
      <TouchableWithoutFeedback
        onPress={() => props.navegacao.navigate('MyDoneTrainings')}>
        <Image source={list} />
      </TouchableWithoutFeedback>
    </View>
  );
}

export default BottomBar;
