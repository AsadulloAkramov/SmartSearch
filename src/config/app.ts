const appConfig = {
  environment: process.env.NODE_ENV || 'development',
  port: process.env.APP_PORT || 5000,
  version: process.env.VERSION || 5000,
  production: process.env.NODE_ENV === 'production'
};
export default appConfig;
