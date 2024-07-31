const cartService = require("../service/cartService");
const productService = require("../service/productService");
const config = require("../config/config");
const logger = require("../logger/logger");

const getCartItems = async (req, res) => {
  try {
    const authHeader = req.headers['Authorization'];
    const UserToken = authHeader && authHeader.split(' ')[1];
    if (!UserToken) {
      return res.status(401).json({ Message: 'No token provided' });
    }
    //const { UserToken } = req.query;
    logger.info(UserToken);
    const url = `?UserToken=${encodeURIComponent(UserToken)}`;
    logger.info(config.cartsServiceUrl + url);
    const getCartItemURL = config.cartsServiceUrl + url
    const response = await cartService.getCartItems(getCartItemURL);
    logger.info(response.data);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.status).json({
      Message: error.message,
    });
  }
};

const deleteCartItem = async (req, res) => {
  try {
    const deleteCartItemURL = `/${req.params.cartId}/items/${req.params.productId}`
    const response = await cartService.deleteCartItem(deleteCartItemURL);
    res.status(response.status).json({
      message: "Deleted Successfully"
    });
  } catch (error) {
    res.status(error.status).json({
      Message: error.message,
    });
  }
};

const createCarts = async (req, res) => {
  try {
    logger.info("listening creating carts...");
    const { cartItems } = req.body;
    if (!cartItems || cartItems.length === 0) {
      throw new Error("Cart items are missing or empty");
    }
    logger.info(cartItems);
    const productId = cartItems[0].productId;
    const productResponse = await productService.getProductById(productId);
    logger.info(productResponse.data);
    const cartData = req.body;
    const response = await cartService.createCarts(cartData);
    res.status(response.status).json(response.data);
  } catch (error) {
    logger.error(`Error creating cart: ${error.message}`);
    res.status(error.status).json({
      Message: error.message,
    });
  }
};

const updateCartItem = async (req, res) => {
  const updateCartItemURL = `/${req.params.cartId}/items/${req.params.productId}`;
  const cartData =  req.body
  try {
    const response = await cartService.updateCartItem(updateCartItemURL,cartData);
    res.status(response.status).json(response.data);
  } catch (error) {
    res.status(error.status).json({
      Message: error.Message,
    });
  }
};
module.exports = {
  deleteCartItem,
  getCartItems,
  createCarts,
  updateCartItem,
};
