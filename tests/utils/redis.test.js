const { storeToken, getToken, client } = require('../../src/utils/redis');

describe('check redis functions', () => {
  it('should store token in redis', async () => {
    jest.spyOn(client, 'set').mockResolvedValue('OK');
    const response = await storeToken('maitra', 'token');
    expect(response).toEqual('OK');
  });
  it('should get token from redis', async () => {
    jest.spyOn(client, 'get').mockResolvedValue('token');
    const response = await getToken('maitra');
    expect(response).toEqual('token');
  });
});
