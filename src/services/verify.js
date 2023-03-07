const verifyJWT = require('../utils/jwtToken');
const redisFunctions = require('../utils/redis');

const tokenVerifyService = async (token, username) => {
  const tokenFromRedis = await redisFunctions.getToken(username);
  console.log(tokenFromRedis);
  console.log(token);
  if (tokenFromRedis !== token) throw new Error('Invalid token');
  const decoded = verifyJWT.verifyJWT(token);
  if (decoded) return decoded;
  throw new Error('Invalid token');
};

module.exports = { tokenVerifyService };
