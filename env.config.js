const dotenv = require('dotenv');

dotenv.config({ path: '.env' });

const envConfig = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
};

module.exports = envConfig;
