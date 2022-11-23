import { res } from '../routes/resize';
import valivalidateDimensions from '../utilities/validateDimensions.util';

describe('Testing the exist funtion', () => {
  it('Should return true', () => {
    expect(valivalidateDimensions('400', '200', res)).toEqual(true);
  });
});
