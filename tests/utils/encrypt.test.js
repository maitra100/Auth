const bcrypt = require('bcrypt');
const encryptPassword = require('../../src/utils/encrypt');

describe('check password encryption', () => {
  it('should return encrypted password', async () => {
    jest.spyOn(bcrypt, 'genSaltSync').mockResolvedValue('salt');
    jest.spyOn(bcrypt, 'hashSync').mockResolvedValue('encryptedPassword');
    const response = await encryptPassword('password');
    expect(response).toEqual('encryptedPassword');
  });
});
