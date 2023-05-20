const jwt = require("jsonwebtoken");

const generateToken = (id) => {
  return jwt.sign({ id }, "test", {});
};

module.exports = generateToken;
