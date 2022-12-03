import React, {useContext} from 'react';

import {DrawerItemList} from '@react-navigation/drawer';
import {SafeAreaView} from 'react-native-safe-area-context';

import {Alert, View, Text, TouchableOpacity} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

import {AuthContext} from '../../context/AuthContext';
import {styles} from './styles';

export default function CustomDrawer(props) {
  const {userInfo, handleClearUserInfo} = useContext(AuthContext);

  function handleSignIn() {
    props.navigation.navigate('SignIn');
  }

  function handleLogout() {
    try {
      handleClearUserInfo();
    } catch (error) {
      Alert.alert('Não foi possível realizar operação, tente novamente!');
    }
  }

  return (
    <View style={styles.container}>
      <SafeAreaView>
        <View style={styles.header}>
          <TouchableOpacity
            style={styles.goBackView}
            onPress={() => props.navigation.closeDrawer()}>
            <Icon name="close" size={20} color="#111" />
          </TouchableOpacity>

          <Text style={styles.username}>{userInfo?.username}</Text>
        </View>
        <DrawerItemList {...props} />

        <View style={styles.optionsView}>
          {userInfo ? (
            <TouchableOpacity
              style={styles.optionsButton}
              onPress={handleLogout}>
              <Icon name="sign-out" size={15} color="#111" />
              <Text style={styles.signOutText}>Sair</Text>
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              style={styles.optionsButton}
              onPress={handleSignIn}>
              <Icon name="sign-in" size={15} color="#111" />
              <Text style={styles.signOutText}>Entrar</Text>
            </TouchableOpacity>
          )}
        </View>
      </SafeAreaView>
    </View>
  );
}
