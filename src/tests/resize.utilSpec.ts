import resizeImg from '../utilities/resize.util';
import { res } from '../routes/resize';
import path from 'path';
import exists from '../utilities/checkExist.util';
import fs from 'fs';

describe('Testing the image preocessing functionality', () => {
  it('Should not throw an error', () => {
    expect(() => {
      resizeImg(
        path.join(__dirname, '..', 'img', 'full', 'fjord.jpg'),
        path.join(__dirname, '..', 'img', 'thumb', 'fjord.jpg'),
        400,
        200,
        res
      );
    }).not.toThrowError();
  });

  it('Should find the new resized image', () => {
    const filePath = path.join(__dirname, '..', 'img', 'full', 'fjord.jpg');
    const resizedPath = path.join(__dirname, '..', 'img', 'thumb', 'fjord-400-200.jpg');
    if (exists(resizedPath)) {
      fs.unlinkSync(resizedPath);
    }
    resizeImg(
      filePath,
      resizedPath,
      400,
      200,
      res
    )
    expect(exists(resizedPath)).toBeTrue;
  });
});

