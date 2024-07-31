const {
  axiosCartsInstance,
} = require("../config/axiosInstance");
const logger = require("../logger/logger");

const getCartItems = async (getCartItemURL) => {
  try {
    const response = await axiosCartsInstance.get(getCartItemURL);
    logger.info(response.data);
    return response;
  } catch (error) {
    logger.error(`Error occuring because of:${error.message}`);
    throw new customError("Server Error", 500);
  }
};

const deleteCartItem = async (deleteCartItemURL) => {
  try {
    const response = await axiosCartsInstance.delete(deleteCartItemURL);
    return response;
  } catch (error) {
    logger.error(`Error occuring because of:${error.message}`);
    throw new customError("Server Error", 500);
  }
};

const createCarts = async (cartData) => {
  try {
    const response = await axiosCartsInstance.post("", cartData);
    return response;
  } catch (error) {
    logger.error(`Error occuring because of:${error.message}`);
    throw new customError("Server Error", 500);
  }
};

const updateCartItem = async (updateCartItemURL, cartData) => {
  try {
    const response = await axiosCartsInstance.put(updateCartItemURL, cartData);
    return response;
  } catch (error) {
    logger.error(`Error occuring because of:${error.message}`);
    throw new customError("Server Error", 500);
  }
};
module.exports = {
  deleteCartItem,
  getCartItems,
  createCarts,
  updateCartItem,
};
