const productService  = require("../service/productService");
const logger = require("../logger/logger");

const getAllProducts = async (req, res) => {
  try {
    logger.info("listening getAllProducts.......");
    const response = await productService.getAllProducts();
    res.status(response.status).json(response.data);
  } catch (error) {
    logger.error("Encountering error while getAllProducts....");
    res.status(error.status).json({
      Message: error.message,
    });
  }
};

const getProductById = async (req, res) => {
  try {
    logger.error(req.params.productId);
    const productId = req.params.productId;
    const response = await productService.getProductById(productId);
    res.status(response.status).json(response.data);
  } catch (error) {
    logger.error("Encountering error while getAllProducts....");
    res.status(error.status).json({
      Message: error.message,
    });
  }
};
const deleteProductById = async (req, res) => {
  try {
    const productId = req.params.productId;
    const response = await productService.deleteProductById(productId);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.status).json({
      Message: "Deleted Successfully",
    });
  }
};

const createProduct = async (req, res) => {
  try {
    logger.info(req.body);
    const productData = req.body;
    const response = await productService.createProduct(productData);
    logger.info(response.status);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.status).json({
      Message: error.message,
    });
  }
};

const updateProduct = async (req, res) => {
  try {
    logger.info(req.body, req.params.productId);
    const productData = req.body;
    const productId = req.params.productId;
    const response = await productService.updateProduct(productId, productData);
    logger.info(response.status);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.status).json({
      Message: error.message,
    });
  }
};

module.exports = {
  getAllProducts,
  getProductById,
  deleteProductById,
  createProduct,
  updateProduct,
};
