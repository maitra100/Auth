const loginUserService = require('../services/login');

const loginUser = async (req, res) => {
  try {
    const details = await loginUserService(req.body);
    if (details instanceof Error) throw new Error(details.message);
    res.status(200).send({ token: details });
  } catch (e) {
    res.status(400).send(e.message);
  }
};

module.exports = loginUser;
