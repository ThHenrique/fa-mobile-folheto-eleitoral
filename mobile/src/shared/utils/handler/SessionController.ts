import {IUser} from '../../interfaces/IUser';

import {AsyncStorage} from 'react-native';

class SessionController {
  async clearRecords() {
    await AsyncStorage.clear();
  }

  async getToken() {
    const sessionToken = await AsyncStorage.getItem('authentication_token');
    if (!sessionToken) {
      return null;
    }
    const token: string = JSON.parse(sessionToken);
    return token;
  }

  async setToken(token: string) {
    await AsyncStorage.setItem('authentication_token', JSON.stringify(token));
  }

  async setUserInfo(user: IUser) {
    await AsyncStorage.setItem('user_data', JSON.stringify(user));
  }

  async clearUserInfo() {
    await AsyncStorage.removeItem('user_data');
  }

  async getUserInfo() {
    const sessionUser = await AsyncStorage.getItem('user_data');
    if (!sessionUser) {
      return null;
    }
    const user: IUser = JSON.parse(sessionUser);
    return user;
  }
}

export default new SessionController();
