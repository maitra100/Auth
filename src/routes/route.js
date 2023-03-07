const express = require('express');
const addUser = require('../controllers/user');
const loginUser = require('../controllers/login');
const tokenVerify = require('../controllers/verify');

const route = express.Router();

route.post('/User', addUser);
route.post('/login', loginUser);
route.post('/token/variable', tokenVerify);

module.exports = route;
