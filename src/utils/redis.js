const redis = require('redis');

const client = redis.createClient();

client.connect().then(() => {
  console.log('Redis connected');
});

const storeToken = async (token, username) => {
  const status = await client.set(username, token, 'EX', 60 * 60);
  return status;
};

const getToken = async (username) => {
  const token = await client.get(username);
  return token;
};

module.exports = { storeToken, getToken, client };
