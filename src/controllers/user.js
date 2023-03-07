const addUserService = require('../services/user');

const addUser = async (req, res) => {
  try {
    const details = await addUserService.addUserService(req.body);
    res.status(200).send('User added successfully');
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = addUser;
