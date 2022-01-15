import express from 'express';
import { app as appConfig } from '../../config';
import bodyParser from 'body-parser';
import routes from '../../routes';

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(routes);

app.listen(appConfig.port , ()=> {
  console.log(`[App] is running on port ${appConfig.port}`);
})