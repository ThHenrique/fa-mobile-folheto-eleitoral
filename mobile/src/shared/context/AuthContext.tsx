import React, {createContext, useEffect, useState} from 'react';

import {IUser, IUserAuthenticated} from '../interfaces/IUser';

import SessionController from '../utils/handler/SessionController';

interface AuthContextLike {
  userInfo: IUser | null;
  saveUserDataInStorage: (data: IUserAuthenticated) => void;
  handleClearUserInfo: () => void;
}

interface Props {
  children: JSX.Element;
}

const AuthContext = createContext<AuthContextLike>({
  userInfo: null,
  saveUserDataInStorage: () => {},
  handleClearUserInfo: () => {},
});

const AuthProvider: React.FC<Props> = ({children}) => {
  const [userInfo, setUserInfo] = useState<IUser | null>(null);

  useEffect(() => {
    getUserInfo();
  }, []);

  async function getUserInfo() {
    const userData = await SessionController.getUserInfo();

    if (userData) {
      setUserInfo(userData);
    }
  }

  async function saveUserDataInStorage(data: IUserAuthenticated) {
    await SessionController.setUserInfo(data.user);
    await SessionController.setToken(data.token);
    setUserInfo(data.user);
  }

  async function handleClearUserInfo() {
    await SessionController.clearUserInfo();
    setUserInfo(null);
  }

  return (
    <AuthContext.Provider
      value={{userInfo, saveUserDataInStorage, handleClearUserInfo}}>
      {children}
    </AuthContext.Provider>
  );
};

export {AuthProvider, AuthContext};
