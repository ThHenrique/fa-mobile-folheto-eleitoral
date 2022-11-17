import React from 'react';

import {useNavigation, StackActions} from '@react-navigation/native';

import {Image, Text, TouchableOpacity, View} from 'react-native';

import {PropsStack} from '../../shared/types/rootStackParamList';

import {styles} from './styles';

export function Splash() {
  const navigation = useNavigation<PropsStack>();

  function goToApp() {
    navigation.dispatch(StackActions.replace('SearchCandidate'));
  }
  return (
    <View style={styles.container}>
      {/* <Modal animationType="slide" visible={true}>
        <VotingIntentionSucessModal />
      </Modal> */}
      <Image style={styles.iconLogo} />
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
