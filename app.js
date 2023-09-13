const express = require('express');
const tourRouter = require('./routes/tourRoutes');
const userRouter = require('./routes/userRoutes');

const app = express();

// 1) GLOBAL MIDDLEWARES
// Body parser, reading data from body into req.body
app.use(express.json({ limit: '10kb' }));


// 2) ROUTES
app.use('/api/tours', tourRouter);
app.use('/api/users', userRouter);


module.exports = app;
