const { awaken } = require('./awaken');

describe('awaken', () => {
  test('should call res.sendStatus with 200', async () => {
    const req = {};
    const res = { sendStatus: jest.fn() };
    await awaken(req, res);
    expect(res.sendStatus).toHaveBeenNthCalledWith(1, 200);
  });
});
