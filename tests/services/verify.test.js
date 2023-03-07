const verifyJWT = require('../../src/utils/jwtToken');
const redisFunctions = require('../../src/utils/redis');
const tokenVerifyService = require('../../src/services/verify');

describe('verify token', () => {
  it('should verift token if correct', async () => {
    jest.spyOn(redisFunctions, 'getToken').mockResolvedValue('token');
    jest.spyOn(verifyJWT, 'verifyJWT').mockReturnValue({ userName: 'test' });
    const response = await tokenVerifyService.tokenVerifyService('token', 'test');
    expect(response).toEqual({ userName: 'test' });
  });
  it('should throw error if token is invalid', async () => {
    const err = new Error('Invalid token');
    jest.spyOn(redisFunctions, 'getToken').mockResolvedValue('token');
    jest.spyOn(verifyJWT, 'verifyJWT').mockReturnValue(null);
    await expect(tokenVerifyService.tokenVerifyService('token', 'test')).rejects.toThrow(err);
  });
  it('should throw error if token is not the same as redis token', async () => {
    const err = new Error('Invalid token');
    jest.spyOn(redisFunctions, 'getToken').mockResolvedValue('token');
    await expect(tokenVerifyService.tokenVerifyService('token1', 'test')).rejects.toThrow(err);
  });
});
