import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

const Logo = require('../../assets/img/Logo.png');

import {styles} from './styles';

export function VotingIntentionSucessModal({
  handleModalVisible,
}: {
  handleModalVisible: () => void;
}) {
  return (
    <View style={styles.container}>
      <Image style={styles.iconLogo} source={Logo} />
      <Text style={styles.title}>Tudo Certo!</Text>

      <Text style={styles.simpleText}>
        Sua Intenção de voto foi salva. Agora é só esperar as eleições para
        efetivar sua intenção{':)'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleModalVisible}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}
