import {StackActions, useNavigation} from '@react-navigation/native';
import React, {useState} from 'react';

import {View, Text, TouchableOpacity, TextInput} from 'react-native';
import {PropsStack} from '../../shared/types/rootStackParamList';

import {styles} from './styles';

export function SignIn() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigation = useNavigation<PropsStack>();

  function goToApp() {
    navigation.dispatch(StackActions.replace('SearchCandidate'));
  }

  function handleSignIn() {}

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Entrar</Text>

      <Text style={styles.textExplain}>
        Entre e tenha acesso a todas funcionalidades do aplicativo
      </Text>

      <View style={styles.form}>
        <View style={styles.inputBoxView}>
          <Text style={styles.labelText}>Email</Text>
          <TextInput
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
            keyboardType="email-address"
            style={styles.inputBox}
          />
        </View>

        <View style={styles.inputBoxView}>
          <Text style={styles.labelText}>Senha</Text>
          <TextInput
            value={password}
            onChangeText={setPassword}
            placeholder="Senha"
            textContentType="password"
            style={styles.inputBox}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignIn}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.textSignUp}>
        Ainda não possuí cadastro ?{' '}
        <Text style={styles.buttonInlineText} onPress={() => {}}>
          Criar conta agora
        </Text>
      </Text>
      <Text style={styles.simpleText}>
        Você pode continuar sem precisar realizar login na plataforma,{' '}
        <Text style={styles.buttonInlineText} onPress={goToApp}>
          entrar sem login
        </Text>
      </Text>
    </View>
  );
}
