const bcrypt = require('bcrypt');
const addUserService = require('../services/user');

const saltRounds = 10;

const addUser = async (req, res) => {
  try {
    const details = await addUserService(req.body);
    res.status(200).send('User added successfully');
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = addUser;
