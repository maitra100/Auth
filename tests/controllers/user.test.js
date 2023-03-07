const addUser = require('../../src/controllers/user');
const addUserService = require('../../src/services/user');

describe('add user in database', () => {
  it('should add user in database', async () => {
    jest.spyOn(addUserService, 'addUserService').mockResolvedValue({ userName: 'test' });
    const mockReq = { body: { userName: 'test', password: 'test' } };
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await addUser(mockReq, mockRes);
    expect(mockRes.status).toBeCalledWith(200);
    expect(mockRes.send).toBeCalledWith('User added successfully');
  });
  it('should throw error when user not added in database', async () => {
    jest.spyOn(addUserService, 'addUserService').mockRejectedValue(new Error('User not added'));
    const mockRes = {
      status: jest.fn().mockReturnThis(),
      send: jest.fn(),
    };
    await addUser({
      body: {
        userName: 'test',
      },
    }, mockRes);
    expect(mockRes.status).toBeCalledWith(400);
    expect(mockRes.send).toBeCalledWith('User not added');
  });
});
