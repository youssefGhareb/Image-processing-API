import express from 'express';
// import morgan from 'morgan';
import * as dotenv from 'dotenv';

import { routesFun } from './routes/resize';

dotenv.config();
const PORT = process.env.PORT || 3000;

// create an instance server
const app: express.Application = express();


// add routing for / path
app.use('/resize', routesFun);

// start express server
app.listen(PORT, () => {
  console.log(`Server is starting at port:${PORT}`);
});

export default app;
