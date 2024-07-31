const { axiosProductsInstance } = require("../config/axiosInstance");
const customError = require("../utils/customError");
const logger = require("../logger/logger");

const getAllProducts = async () => {
  try {
    logger.info("listening getAll products in service layer.......");
    const response = await axiosProductsInstance.get();
    return response;
  } catch (error) {
    logger.error(`Error occuring because of:${error.message}`);
    throw new customError("Server Error", 500);
  }
};

const getProductById = async (productId) => {
  try {
    logger.error(productId);
    const response = await axiosProductsInstance.get(`/${productId}`);
    return response;
  } catch (error) {
    logger.error(`Error occuring because of:${error.message}`);
    throw new customError("Server Error", 500);
  }
};
const deleteProductById = async (productId) => {
  try {
    const response = await axiosProductsInstance.delete(`/${productId}`);
    return response;
  } catch (error) {
    logger.error(`Error occuring because of:${error.message}`);
    throw new customError("Server Error", 500);
  }
};

const createProduct = async (productData) => {
  try {
    logger.info(productData);
    const response = await axiosProductsInstance.post("", productData);
    return response;
  } catch (error) {
    logger.error(`Error occuring because of:${error.message}`);
    throw new customError("Server Error", 500);
  }
};

const updateProduct = async (productId, productData) => {
  try {
    logger.info(req.body);
    const response = await axiosProductsInstance.put(
      `${productId}`,
      productData
    );
    return response;
  } catch (error) {
    logger.error(`Error occuring because of:${error.message}`);
    throw new customError("Server Error", 500);
  }
};

module.exports = {
  getAllProducts,
  updateProduct,
  deleteProductById,
  getProductById,
  createProduct,
};
