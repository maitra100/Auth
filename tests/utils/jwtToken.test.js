const jwt = require('jsonwebtoken');
const generateToken = require('../../src/utils/jwtToken');

describe('check jwt token generation and verification', () => {
  it('should return jwt token', async () => {
    jest.spyOn(jwt, 'sign').mockResolvedValue('token');
    const response = await generateToken.generateToken('password');
    expect(response).toEqual('token');
  });
  it('should verify jwt token', async () => {
    jest.spyOn(jwt, 'verify').mockResolvedValue({ userName: 'maitra' });
    const response = await generateToken.verifyJWT('token');
    expect(response).toEqual({ userName: 'maitra' });
  });
});
