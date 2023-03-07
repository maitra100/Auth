const bcrypt = require('bcrypt');

const saltRounds = 10;

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  return encryptedPassword;
};

module.exports = encryptPassword;
