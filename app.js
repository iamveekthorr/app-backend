const express = require('express');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');

const app = express();

app.enable('trust proxy');
//Implement cors
app.use(cors({ origin: true, credentials: true }));

app.options('*', cors());

app.use(mongoSanitize());
app.use(helmet());

app.use(cookieParser());

// Get router from product routes
app.use('/api/v1/products', productRoutes);

//To catch all unhandled routes
app.all('*', (req, res, next) => {
  next(new Error(`Can't find ${req.originalUrl} on this server!`, 404));
});

module.exports = app;
