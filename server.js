/* eslint-disable no-undef */
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

// Database connection
const connectDB = require('./config/db');

// Middleware files
const logger = require('./middleware/logger');

// Load env vars
dotenv.config({path: './config/config.env'});

// Connect to Database
connectDB();

// Route files
const bootcamps = require('./routes/bootcamps');

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
const server = app.listen(PORT, console.log(`Server running in ${process.env.NODE_ENV} mode on port ${PORT}`));

// Handle unhandled promise rejections
process.on('unhandledRejection', (error, promise) => {
  console.log(`Error: ${error.message}`);
  // Close server and exit process
  server.close(() => process.exit(1));
});
