const logger = require("../logger/logger");
const userService = require("../service/userService");
const customError = require("../utils/customError");

const userLogin = async (req, res) => {
  const { email, password } = req.body;
  const userToken = await userService.getToken(email, password);
  try {
    if (userToken) {
      logger.info(`I got usertoken ${userToken}`);
      res.status(200).json({
        userToken: userToken,
      });
    } else {
      throw new customError("Authentication Failed", 401);
    }
  } catch (error) {
    logger.error(`The error you encounter ${error.message}`);
    res.status(error.status || 500).json({
      message: error.message || "Server Error",
    });
  }
};

const userRegister = async (req, res) => {
  const userData = req.body;

  try {
    const response = await userService.registerUser(userData);
    logger.info(response);
    res.status(201).json({
      message: "User register Succsessfully",
    });
  } catch (error) {
    logger.error(`Error: ${error.message}`);
    res.status(error.status || 500).json({ message: error.message });
  }
};

const userLogout = async (req, res) => {
  const { email } = req.body;

  try {
    const response = userService.signoutUser(email);
    logger.info(response);
    res.status(200).json({
      message: response,
    });
  } catch (error) {
    logger.error(`Error: ${error.message}`);
    res.status(error.status || 500).json({ message: error.message });
  }
};

const userRefreshToken = async (req, res) => {
  try {
    const { email } = req.body;
    const authHeader = req.headers["RefreshToken"];
    const RefreshToken = authHeader && authHeader.split(" ")[1];

    if (!RefreshToken) {
      return res.status(401).json({ Message: "No refresh Token provided" });
    } else {
      const response = await userService.getRefreshToken(RefreshToken, email);
      res.status(200).json(response);
    }
  } catch (error) {
    logger.error(`Error: ${error.message}`);
    res.status(error.status || 500).json({ message: error.message });
  }
};

module.exports = { userLogin, userRegister, userLogout, userRefreshToken };
