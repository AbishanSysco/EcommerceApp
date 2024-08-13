import log from "loglevel";
import { AxiosInstanceCarts } from "./AxiosInstance";

export const getCartItems = async (req, res) => {
    try {
      logger.info("listening getAllProducts.......");
      const response = await AxiosInstanceCarts.get();
      return response.data;
    } catch (error) {
        log.info(`error of getting data  :${error.message}`);
        throw error;
    }
  };