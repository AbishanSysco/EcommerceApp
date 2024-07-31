const jwt = require("jsonwebtoken");
const logger = require("../logger/logger");

const getUserFromToken = (userToken) => {
  try {
    const decodedToken = jwt.decode(userToken, { complete: true });

    if (decodedToken) {
      return new Promise.resolve(decodedToken.payload);
    }
    throw new Error("Invalid token");
  } catch (error) {
    logger.info(error);
    return new Promise.reject(error);
  }
};

module.exports = { getUserFromToken };
