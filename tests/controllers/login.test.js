const loginUser = require('../../src/controllers/login');
const loginUserService = require('../../src/services/login');

describe('login user', () => {
  it('should login user if details correct', async () => {
    jest.spyOn(loginUserService, 'loginUserService').mockResolvedValue('token');
    const mockReq = { body: { userName: 'test', password: 'test' } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await loginUser(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith({ token: 'token' });
  });
  it('should throw error when user not added in database', async () => {
    jest.spyOn(loginUserService, 'loginUserService').mockRejectedValue(new Error('Invalid username or password'));
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await loginUser({
      body: {
        userName: 'test',
      },
    }, mockRes);
    expect(mockRes.status).toBeCalledWith(400);
    expect(mockRes.send).toBeCalledWith('Invalid username or password');
  });
});
