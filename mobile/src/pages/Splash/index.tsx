import React, {useEffect, useContext} from 'react';

import {useNavigation, StackActions} from '@react-navigation/native';

import {Image, Text, TouchableOpacity, View} from 'react-native';

import {PropsStack} from '../../shared/types/rootStackParamList';

const Logo = require('../../shared/assets/img/Logo.png');

import {styles} from './styles';
import SessionController from '../../shared/utils/handler/SessionController';

export function Splash() {
  const navigation = useNavigation<PropsStack>();

  async function goToApp() {
    const verifyToken = await SessionController.getToken();

    if (verifyToken) {
      navigation.dispatch(StackActions.replace('SearchCandidate'));
      return;
    }

    navigation.dispatch(StackActions.replace('SignIn'));
  }

  return (
    <View style={styles.container}>
      <Image style={styles.iconLogo} source={Logo} />
      <Text style={styles.welcomeText}>Bem Vindo ao</Text>
      <Text style={styles.projectNameText}>Folheto</Text>
      <Text style={styles.projectNameOrangeText}>Eleitoral Digital</Text>

      <Text style={styles.simpleText}>
        Aqui você encontra o santinho do seu candidato de maneira fácil e sem
        lixo eleitoral.
      </Text>
      <Text style={styles.simpleText}>Entre é de graça.</Text>

      <TouchableOpacity style={styles.button} onPress={goToApp}>
        <Text style={styles.buttonText}>ACESSAR</Text>
      </TouchableOpacity>
    </View>
  );
}
