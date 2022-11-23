import app from '../index';

describe('Testing the server initialization', () => {
  it('should start the server successfully and be actively listening', () => {
    expect(app.listen(3001).listening).toEqual(true);
  });
});
