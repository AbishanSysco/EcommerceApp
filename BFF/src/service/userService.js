const { CognitoUserAttribute } = require("amazon-cognito-identity-js");
const cognitoConfig = require("../config/cognitoConfig");
const logger = require("../logger/logger");
const customError = require("../utils/customError");

const getToken = async (email, password) => {
  const cognitoUser = cognitoConfig.getCognitoUser(
    cognitoConfig.getUserPool,
    email
  );
  const AuthenticationDetails = cognitoConfig.getAuthenticationDetails(
    email,
    password
  );

  return new Promise((resolve, reject) => {
    cognitoUser.authenticateUser(AuthenticationDetails, {
      onSuccess: function (result) {
        const tokenInfo = {
          userToken: result.getIdToken().getJwtToken(),
          accessToken: result.getAccessToken().getJwtToken(),
          refreshToken: result.getRefreshToken().getToken(),
        };
        resolve(tokenInfo);
      },
      onFailure: function (err) {
        logger.info(err);
        reject(new customError("Authentication Failed", 401));
      },
    });
  });
};

const registerUser = (userData) => {
  const userAttributeList = [
    new CognitoUserAttribute({ Name: "email", Value: userData.email }),
  ];

  return new Promise((resolve, reject) => {
    cognitoConfig.getUserPool.signUp(
      userData.email,
      userData.password,
      userAttributeList,
      null,
      (err, data) => {
        if (err) {
          logger.info(`error encountering here ${err.message}`);
          reject(new customError("Registration Failed", 401));
        } else {
          resolve(data);
        }
      }
    );
  });
};
const signoutUser = (email) => {
  const cognitoUser = cognitoConfig.getCognitoUser(
    cognitoConfig.getUserPool,
    email
  );
  try {
    cognitoUser.globalSignOut();
    return "user signout successfully";
  } catch (err) {
    throw new customError("Server Error", 500);
  }
};

const getAccessTokenFromRefreshToken = (refreshToken, email) => {
  const cognitoUser = cognitoConfig.getCognitoUser(userPool, email);

  return new Promise((resolve, reject) => {
    cognitoUser.refreshSession(refreshToken, (err, session) => {
      if (err) {
        reject(err);
      } else {
        resolve(session);
      }
    });
  });
};

module.exports = {
  getToken,
  registerUser,
  signoutUser,
  getAccessTokenFromRefreshToken,
};
