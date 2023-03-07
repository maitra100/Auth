const bcrypt = require('bcrypt');
const db = require('../../database/models');
const generateToken = require('../utils/jwtToken');
const redisFunctions = require('../utils/redis');

const loginUserService = async (details) => {
  const user = await db.User.findOne({
    where: {
      userName: details.userName,
    },
  });
  if (user === null) {
    console.log('Invalid username or password');
    throw new Error('Invalid username or password');
  }

  const compare = await bcrypt.compareSync(details.password, user.password);
  if (compare) {
    const token = generateToken.generateToken({ userName: user.userName });
    await redisFunctions.storeToken(token, user.userName);
    return token;
  }
  throw new Error('Invalid username or password');
};

module.exports = { loginUserService };
