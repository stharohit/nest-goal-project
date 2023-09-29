import * as process from 'process';

export const configuration = () => ({
  jwtSecretKey: process.env.JWT_SECRET_KEY,
  refreshSecret: process.env.JWT_REFRESH_SECRET_KEY,
});
