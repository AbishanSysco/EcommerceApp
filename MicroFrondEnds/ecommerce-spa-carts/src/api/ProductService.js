import log from "../logger/Logger";
import {AxiosInstanceProducts } from "./AxiosInstance";

export const getProductsById = async (productId) => {
    try {
      log.info("listening getAllProducts.......->");
      const response = await AxiosInstanceProducts(`/${productId}`);
      return response;
    } catch (error) {
         const status = error.response?.status;
        log.info(`error of in productservice -> :${status}`);
        throw error;
    }
  };