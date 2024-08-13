import log from "loglevel";
import { AxiosInstanceUserLogin } from "./AxiosInstance";

export const UserLogin = async (userData) => {
  try {
    const response = await AxiosInstanceUserLogin.post(userData);
    return response.data;
  } catch (error) {
    log.info(`error of getting data  :${error.message}`);
    throw error;
  }
};
