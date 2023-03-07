const loginUserService = require('../services/login');

const loginUser = async (req, res) => {
  try {
    const details = await loginUserService.loginUserService(req.body);
    res.status(200).send({ token: details });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = loginUser;
