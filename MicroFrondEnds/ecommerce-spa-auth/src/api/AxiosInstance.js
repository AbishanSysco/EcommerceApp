import axios from "axios";
import { Config } from "./Config";
import log  from "loglevel";


const AxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
    },
  });
  console.log('Creating Axios instance with baseURL:', baseURL);

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      log.info('API Error:', error.response || error.message);
      return Promise.reject(error);
    }
  );

  console.log('Creating Axios instance :', instance);
  return instance;
};

export const AxiosInstanceUserLogin = AxiosInstance(Config.userLoginURL);
export default AxiosInstance;
