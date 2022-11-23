import express from 'express';
import fs from 'fs';
import path from 'path';
import resizeImg from '../utilities/resize.util';
import exists from '../utilities/checkExist.util';
import validateDimensions from '../utilities/validateDimensions.util';

const routes = express.Router();

let testResponse: express.Response = express.response;

routes.get('/', (req: express.Request, res: express.Response) => {
  testResponse = res;
  
  // console.log('Entered resize endpoint');
  const fileName: string = req.query.fileName as unknown as string;
  const height: string = req.query.heigth as unknown as string;
  const width: string = <string>(<unknown>req.query.width);
  // console.log(fileName);


  const dirPath = path.join(__dirname, '..', 'img', 'thumb');
  const fullPath = path.join(__dirname, '..', 'img', 'full', <string>fileName + '.jpg');

  const thumbPath = path.join(
    __dirname,
    '..',
    'img',
    'thumb',
    <string>fileName + '-' + width + '-' + height + '.jpg'
  );


  if (!validateDimensions(width, height, res)) {
    return;
  }

  if (exists(thumbPath)) {
    console.log('Sending stored image');
    res.sendFile(thumbPath);
  }
  else if (exists(fullPath)) {
    if (exists(dirPath)) {
      resizeImg(fullPath, thumbPath, parseInt(width), Number(height), res);
    } else {
      fs.mkdirSync(dirPath);
      resizeImg(fullPath, thumbPath, parseInt(width), Number(height), res);
    }
  } else {
    res.send(
      'Sorry, the image cannot be found. Please type the correct file name and extension'
    );
  }
});

export const res = testResponse;
export const routesFun = routes;
