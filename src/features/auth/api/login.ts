import { LOGIN_URL, LOGOUT_URL } from '@/config';
import { configureAuth } from '@/libs/auth';
import { axios } from '@/libs/axios';

import { LoginCredentials, User } from '../types';

export const login = (payload: LoginCredentials): Promise<User> => {
  return axios.post(LOGIN_URL, payload);
};

export const logout = () => axios.post(LOGOUT_URL);

export const { useLogin, useLogout, useUser } = configureAuth<LoginCredentials, User>({
  loginFn: login,
  logoutFn: logout,
});
