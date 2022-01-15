/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import mongoose from 'mongoose';
import { mongoDb } from '../../config';
export default class Connection {
  url = `mongodb://${mongoDb.user}/${mongoDb.password}@${mongoDb.address}:${mongoDb.port}/${mongoDb.database}`;
  constructor() {
    if (mongoDb.authDisable) {
      this.url = `mongodb://${mongoDb.address}:${mongoDb.port}/${mongoDb.database}`;
    }
  }
  
  async connect() {
    mongoose.set('debug', true)
    return mongoose.connect(
      this.url,
      {
        serverSelectionTimeoutMS: 30000,
        keepAliveInitialDelay: 300000
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } as any,
      (error) => {
        if (error) {
          console.error(`Database connection error: ${error}`);
        }
      }
    );
  }
}
