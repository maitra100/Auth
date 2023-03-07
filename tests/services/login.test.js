const bcrypt = require('bcrypt');
const db = require('../../database/models');
const generateToken = require('../../src/utils/jwtToken');
const redisFunctions = require('../../src/utils/redis');
const loginUserService = require('../../src/services/login');

describe('login user', () => {
  it('should login a user when correct details are provided', async () => {
    jest.spyOn(db.User, 'findOne').mockResolvedValue({ userName: 'test', password: 'test' });
    jest.spyOn(bcrypt, 'compareSync').mockReturnValue(true);
    jest.spyOn(generateToken, 'generateToken').mockReturnValue('token');
    jest.spyOn(redisFunctions, 'storeToken').mockResolvedValue('token');
    const response = await loginUserService.loginUserService({ userName: 'test', password: 'test' });
    expect(response).toEqual('token');
  });
  it('should throw an error when user not found in db', async () => {
    const err = new Error('Invalid username or password');
    jest.spyOn(db.User, 'findOne').mockResolvedValue(null);
    await expect(loginUserService.loginUserService({ userName: 'test', password: 'test' })).rejects.toThrow(err);
  });
  it('should throw error when user password is incorrect', async () => {
    const err = new Error('Invalid username or password');
    jest.spyOn(db.User, 'findOne').mockResolvedValue({ userName: 'soumil' });
    jest.spyOn(bcrypt, 'compareSync').mockResolvedValue(false);
    await expect(loginUserService.loginUserService({ userName: 'soumil', password: 'test' })).rejects.toThrow(err);
  });
});
