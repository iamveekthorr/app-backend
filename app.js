const express = require('express');
const helmet = require('helmet');
const mongoSanitize = require('express-mongo-sanitize');
const cookieParser = require('cookie-parser');
const cors = require('cors');

const productRoutes = require('./routes/product.routes');

const app = express();

app.enable('trust proxy');

app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ limit: '10kb', extended: true }));

//Implement cors
app.use(cors({ origin: true, credentials: true }));

app.options('*', cors());

// sanitize mongodb for XXS attack
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
