// import { EVENT_API_URL } from '@/config';
import Axios, { InternalAxiosRequestConfig } from 'axios';

import { globalStorage } from '@/utils/storage';

export const axios = Axios.create();

const authRequestInterceptor = (config: InternalAxiosRequestConfig) => {
  console.log('config', config);

  const token = globalStorage.getStore('access_token');

  if (token) {
    config.headers.Authorization = 'Bearer ' + token;
  }

  config.headers.Accept = 'application/json';

  return config;
};

axios.interceptors.request.use(authRequestInterceptor);
