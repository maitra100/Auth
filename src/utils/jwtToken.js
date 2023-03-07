const jwt = require('jsonwebtoken');

const generateToken = (payload) => jwt.sign(payload, 'maitra123456fdgfdg1234', {
  expiresIn: '1800s',
});

const verifyJWT = async (token) => {
  const decoded = await jwt.verify(token, 'maitra123456fdgfdg1234');
  return decoded;
};

module.exports = { generateToken, verifyJWT };
