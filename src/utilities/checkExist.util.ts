import fs from 'fs';

const exists = (path: string): boolean => {
  if (fs.existsSync(path)) {
    console.log('Works with ', path);
    return true;
  } else {
    return false;
  }
};

export default exists;
