import dotenv from 'dotenv';
dotenv.config();
import app from './app';
import mongoDb from './mongoDB';

export { app, mongoDb };
