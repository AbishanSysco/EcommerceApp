const {
  CognitoUserPool,
  AuthenticationDetails,
  CognitoUser,
} = require("amazon-cognito-identity-js");
const dotenv = require("dotenv");

dotenv.config();

const getUserPool = () => {
  const poolData = {
    UserPoolId: process.env.COGNITO_USERPOOL_ID,
    ClientId: process.env.COGNITO_CLIEND_ID,
  };

  const userPool = new CognitoUserPool(poolData);
  return userPool;
};

const getCognitoUser = (userPool, email) => {
  const userParams = {
    Username: email,
    Pool: userPool,
  };

  const cognitoUser = new CognitoUser(userParams);
  return cognitoUser;
};

const getAuthenticationDetails = (email, password) => {
  const authenticationData = {
    Username: email,
    Password: password,
  };

  const authenticationDetails = new AuthenticationDetails(authenticationData);
  return authenticationDetails;
};

module.exports = { getUserPool, getCognitoUser, getAuthenticationDetails };
