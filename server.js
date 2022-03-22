const mongoose = require('mongoose');
const envConfig = require('./env.config');
const app = require('./app');

const PORT = envConfig.PORT || 3000;

const server = app.listen(PORT, () => {
  console.log(`App running on port ${PORT}...`);
});

process.on('unhandledRejection', (reason, promise) => {
  logger.error(`Unhandled rejection at ${promise}, reason: ${reason.message}`);

  server.close(() => {
    process.exit(1);
  });
});

mongoose
  .connect(envConfig.MONGO_URI)
  .then(() => console.log('connected'))
  .catch((err) => console.log(err));

process.on('SIGTERM', () => {
  logger.info('SIGTERM Received, Shutting down gracefully');

  server.close(() => {
    logger.info('Process Terminated because of SIGTERM');
  });
});

app.listen();
