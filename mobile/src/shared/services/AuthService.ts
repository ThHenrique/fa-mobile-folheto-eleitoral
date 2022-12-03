import api from './api';

import {IUserAuthenticated, IUserCreateDTO} from '../interfaces/IUser';

class AuthService {
  public async authenticate(form: {email: string; password: string}) {
    try {
      const {data} = await api.post<IUserAuthenticated>('/authenticate', form);

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  public async signUp(form: IUserCreateDTO) {
    try {
      const {data} = await api.post<IUserAuthenticated>('/user', form);

      console.log(data);

      return data;
    } catch (error) {
      console.error(error);
      return null;
    }
  }
}

export default new AuthService();
