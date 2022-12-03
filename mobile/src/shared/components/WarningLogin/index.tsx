import React from 'react';

import {Text, TouchableOpacity, View} from 'react-native';

import {styles} from './styles';

export function WarningLogin({
  handleSignIn,
  handleGoBack,
}: {
  handleSignIn: () => void;
  handleGoBack: () => void;
}) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Autenticação necessária</Text>

      <Text style={styles.simpleText}>
        Entre com sua conta para prosseguir {':)'}
      </Text>
      <TouchableOpacity style={styles.button} onPress={handleSignIn}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonSecondary} onPress={handleGoBack}>
        <Text style={styles.buttonText}>Voltar</Text>
      </TouchableOpacity>
    </View>
  );
}
