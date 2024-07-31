const axios = require("axios");
const config = require("./config");

const createAxiosInstance = (baseURL) => {
  const instance = axios.create({
    baseURL: baseURL,
  });
  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      return Promise.reject(handleAxiosError(error));
    }
  );
  return instance;
};

const handleAxiosError = (error) => {
  if (error.response) {
    const customError = {
      message: error.response.data.message,
      status: error.response.status,
    };

    return customError;
  }else if(error.request){
    const customError = {
      message: "User request Error",
      status: 500,
    };

    return customError;
  }
  else {
    const customError = {
      message: "something went wrong",
      status: 500,
    };

    return customError;
  }
};

const axiosProductsInstance = createAxiosInstance(config.productServiceUrl);
const axiosCartsInstance = createAxiosInstance(config.cartsServiceUrl);

module.exports = {
  axiosProductsInstance,
  axiosCartsInstance,
};
