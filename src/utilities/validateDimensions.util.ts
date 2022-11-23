import { Response } from 'express';

const validateDimensions = (w: string, h: string, res: Response): boolean => {
  const width = parseInt(w);
  const height = parseInt(h);
  if (!isNaN(width) && !isNaN(height)) {
    // console.log('Width : ', width);
    // console.log('Height : ', height);
    if (width > 0 && height > 0) {
      return true;
    } else {
      res.send('Please enter positive number values for width and height');
    }
  } else {
    res.send('Please enter valid numeric values for width and height');
  }
  return false;
};

export default validateDimensions;
