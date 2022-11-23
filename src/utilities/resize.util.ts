import sharp from 'sharp';
import { Response } from 'express';

const resizeImg = (
  fullPath: string,
  thumbPath: string,
  width: number,
  height: number,
  res: Response
): void => {
  sharp(fullPath)
    .resize(width, height)
    .toFile(thumbPath, (err) => {
      if (err) {
        throw err;
      }
      res.sendFile(thumbPath);
    });
};

export default resizeImg;
