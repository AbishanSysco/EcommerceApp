import log from "loglevel";
import { AxiosInstanceProducts } from "./AxiosInstance";

export const getAllProducts = async () => {
    try {
      logger.info("listening getAllProducts.......");
      const response = await AxiosInstanceProducts.get();
      res.status(response.status).json(response.data);
    } catch (error) {
      log.error("Encountering error while getAllProducts....");
      res.status(error.status).json({
        Message: error.message,
      });
    }
  };