import React, {useContext, useState} from 'react';

import {
  RouteProp,
  StackActions,
  useNavigation,
  useRoute,
} from '@react-navigation/native';

import {Alert, Text, TextInput, TouchableOpacity, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {
  PropsStack,
  RootStackParamList,
} from '../../../shared/types/rootStackParamList';

import AuthService from '../../../shared/services/AuthService';
import {AuthContext} from '../../../shared/context/AuthContext';

import {styles} from './styles';

export function SignUp() {
  const {saveUserDataInStorage} = useContext(AuthContext);

  const route = useRoute<RouteProp<RootStackParamList, 'SignUp'>>();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState(route.params?.email ?? '');
  const [password, setPassword] = useState(route.params?.password ?? '');

  const navigation = useNavigation<PropsStack>();

  function goToApp() {
    navigation.dispatch(StackActions.replace('Home'));
  }

  async function handleSignUp() {
    const form = {
      username,
      email,
      password,
    };

    if (username === '' || email === '' || password === '') {
      Alert.alert('Preencha todos os campos!');
      return;
    }

    const response = await AuthService.signUp(form);

    if (response) {
      saveUserDataInStorage(response);
      goToApp();
    } else {
      Alert.alert('Ocorreu um erro no cadastro, tente novamente!');
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.goBackView} onPress={navigation.goBack}>
          <Icon name="arrow-left" size={15} color="#111" />
        </TouchableOpacity>
        <Text style={styles.title}>Cadastro</Text>
      </View>

      <Text style={styles.textExplain}>
        Cadastre-se e tenha acesso a todas funcionalidades do aplicativo
      </Text>

      <View style={styles.form}>
        <View style={styles.inputBoxView}>
          <Text style={styles.labelText}>Nome completo</Text>
          <TextInput
            value={username}
            onChangeText={setUsername}
            placeholder="Nome completo"
            style={styles.inputBox}
          />
        </View>

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
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>Cadastrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
