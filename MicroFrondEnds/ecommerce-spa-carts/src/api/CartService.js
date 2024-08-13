import log from "../logger/Logger";
import { AxiosInstanceCarts } from "./AxiosInstance";

export const getCartItems = async () => {
    try {
      log.info("listening getAllProducts.......->");
      const response = await AxiosInstanceCarts.get();
      return response;
    } catch (error) {
        log.info(`error of in cartservice -> :${error.message}`);
        throw error;
    }
  };