const tokenVerifyService = require('../../src/services/verify');
const tokenVerify = require('../../src/controllers/verify');

describe('tokenVerify', () => {
  it('should verify token when correct token is passed', async () => {
    jest.spyOn(tokenVerifyService, 'tokenVerifyService').mockResolvedValue('token verified');
    const mockReq = { body: { token: 'test', username: 'test' } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await tokenVerify(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith('token verified');
  });
  it('should throw error when token is invalid', async () => {
    jest.spyOn(tokenVerifyService, 'tokenVerifyService').mockRejectedValue(new Error('Invalid token'));
    const mockReq = { body: { token: 'test', username: 'test' } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await tokenVerify(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(400);
    expect(mockRes.send).toBeCalledWith('Invalid token');
  });
});
