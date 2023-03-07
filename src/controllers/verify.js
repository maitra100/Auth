const tokenVerifyService = require('../services/verify');

const tokenVerify = async (req, res) => {
  try {
    const verificaton = await tokenVerifyService(req.body.token, req.body.username);
    if (verificaton instanceof Error) throw new Error(verificaton.message);
    res.send(verificaton);
  } catch (e) {
    res.end(e.message);
    return new Error(e.message);
  }
};

module.exports = tokenVerify;
