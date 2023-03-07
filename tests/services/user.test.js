const addUserService = require('../../src/services/user');
const db = require('../../database/models');

describe('user creating in database', () => {
  it('should create a user in db when details provided', async () => {
    jest.spyOn(db.User, 'create').mockResolvedValue({ userName: 'test', password: 'test' });
    const user = await addUserService.addUserService({ userName: 'test', password: 'test' });
    expect(user).toEqual({ userName: 'test', password: 'test' });
  });
});
