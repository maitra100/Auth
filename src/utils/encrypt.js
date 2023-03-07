const bcrypt = require('bcrypt');

const saltRounds = 10;

const encryptPassword = (password) => {
  const salt = bcrypt.genSaltSync(saltRounds);
  console.log('salt', salt);
  const encryptedPassword = bcrypt.hashSync(password, salt);
  console.log('encryptedPassword', encryptedPassword);
  return encryptedPassword;
};

module.exports = encryptPassword;
