const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Middleware files
const logger = require('./middleware/logger');

// Route files
const bootcamps = require('./routes/bootcamps');

// Load env vars
dotenv.config({path: './config/config.env'});

const app = express();

// Dev logging middleware
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

// Mount routers
app.use('/api/v1/bootcamps', bootcamps);

// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;

// eslint-disable-next-line no-undef
app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));
