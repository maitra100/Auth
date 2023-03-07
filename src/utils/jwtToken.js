const jwt = require('jsonwebtoken');

const generateToken = (payload) => jwt.sign(payload, 'maitra123456fdgfdg1234', {
  expiresIn: '1800s',
});

const verifyJWT = (token) => {
  try {
    return jwt.verify(token, 'maitra123456fdgfdg1234');
  } catch (e) {
    throw new Error(e.message);
  }
};

module.exports = { generateToken, verifyJWT };
