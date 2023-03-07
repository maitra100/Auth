// const client = require('../redisConnection');
const redis = require('redis');

// const config = {
//   socket: {
//     host: 'docker.for.mac.localhost',
//     port: 6379,
//   },
// };

const client = redis.createClient();

client.connect().then(() => {
  console.log('Redis connected');
});
const storeToken = async (token, username) => {
  await client.set(username, token, 'EX', 60 * 60);
};

const getToken = async (username) => {
  const token = await client.get(username);
  return token;
};

module.exports = { storeToken, getToken };
