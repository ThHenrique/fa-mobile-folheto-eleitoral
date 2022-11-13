import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export function VotingIntentionSucessModal() {
  return (
    <View style={styles.container}>
      <Image style={styles.iconLogo} />
      <Text style={styles.title}>Tudo Certo!</Text>

      <Text style={styles.simpleText}>
        Sua Intenção de voto foi salva. Agora é só esperar as eleições para
        efetivar sua intenção{':)'}
      </Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>OK</Text>
      </TouchableOpacity>
    </View>
  );
}
