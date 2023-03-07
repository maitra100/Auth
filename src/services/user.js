const db = require('../../database/models');
const encryptPassword = require('../utils/encrypt');

const addUserService = async (details) => {
  const user = await db.User.create({ userName: details.userName, password: encryptPassword(details.password) });
  return user;
};

module.exports = { addUserService };
