const db = require('../../database/models');
const generateToken = require('../utils/jwtToken');
const redisFunctions = require('../utils/redis');

const { User } = db;
const bcrypt = require('bcrypt');

const loginUserService = async (details) => {
  const user = await User.findOne({
    where: {
      userName: details.userName,
    },
  });
  if (user === null) {
    console.log('Invalid username or password');
    return new Error('Invalid username or password');
  }

  const compare = bcrypt.compareSync(details.password, user.password);
  if (compare) {
    const token = generateToken.generateToken({ userName: user.userName });
    redisFunctions.storeToken(token, user.userName);
    return token;
  }
  throw new Error('Invalid username or password');
};

module.exports = loginUserService;
