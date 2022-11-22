import api from './api';

import {IUserAuthenticated} from '../interfaces/IUser';

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
}

export default new AuthService();
