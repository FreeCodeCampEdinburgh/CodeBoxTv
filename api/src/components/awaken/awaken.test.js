const { awaken } = require('./awaken');

describe('awaken', () => {
  test('should return 200', async () => {
    const req = {};
    const res = { sendStatus: jest.fn() };
    await awaken(req, res);
    expect(res.sendStatus).toHaveBeenNthCalledWith(1, 200);
  });
});
