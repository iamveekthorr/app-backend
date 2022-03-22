const dotenv = require('dotenv');

config = dotenv.config({ path: '.env' });

if (config.error) {
  throw new Error(config.error);
}

const envConfig = {
  MONGO_URI: process.env.MONGO_URI,
  PORT: process.env.PORT,
};

module.exports = envConfig;
