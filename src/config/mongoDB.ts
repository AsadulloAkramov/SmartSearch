const mongoDbConfig = {
  address: process.env.MONGODB_SERVER || '127.0.0.1',
  authDisable: process.env.MONGO_AUTH_DISABLE === 'true',
  database: process.env.MONGO_DATABASE || 'brightSearch',
  port: process.env.MONGODB_PORT || 27017,
  user: process.env.MONGODB_USER || 'user',
  password: process.env.MONGODB_PASSWORD || '123456',
  url: process.env.MONGODB_URL || 'localhost',
  environment: process.env.MONGODB_ENVIRONMENT || 'dev'
};
export default mongoDbConfig;
