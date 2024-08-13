import axios from "axios";
import { Config } from "./Config";
import log  from "../logger/Logger";


const AxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL: baseURL,
    timeout: 1000,
    headers: {
      'Content-Type': 'application/json',
      'Authorization' :'Bearer string78' ,
    },
  });

  instance.interceptors.response.use(
    (response) => response,
    (error) => {
      const status = error.response?.status;
      const message = error.response?.data?.Message || error.message;
      log.info(`API Error: Status Code: ${status}, Message: ${message}`);
     
      return Promise.reject(error);
    }
  );
  return instance;
};

export const AxiosInstanceCarts = AxiosInstance(Config.cartURL);
export const AxiosInstanceProducts = AxiosInstance(Config.productURL);
export default AxiosInstance;
