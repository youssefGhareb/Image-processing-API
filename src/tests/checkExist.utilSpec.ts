import exists from '../utilities/checkExist.util';
import path from 'path';

describe('Testing the exist funtion', () => {
  it('Should return true', () => {
    expect(
      exists(path.join(__dirname, '..', 'img', 'full', 'fjord.jpg'))
    ).toEqual(true);
  });
  it('Should return false', () => {
    expect(
      exists(path.join(__dirname, '..', 'img', 'full', 'wrong-file-name.jpg'))
    ).not.toEqual(true);
  });
});
