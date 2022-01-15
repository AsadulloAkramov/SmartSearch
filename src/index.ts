/* eslint-disable @typescript-eslint/explicit-function-return-type */
import MongoDB from './shared/database/connect';
import './shared/http/app';

const mongoDb = new MongoDB();
(async function () {
  console.log(mongoDb.url);

  await mongoDb.connect();
  console.log(`[MongoDb] connected mongodb server`);
})();
