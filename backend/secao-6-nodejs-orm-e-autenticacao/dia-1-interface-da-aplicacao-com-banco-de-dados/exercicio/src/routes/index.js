const express = require('express');
const routes = express.Router();

const bookRouter = require('./book.router');

routes.use('/books', bookRouter);

module.exports = routes;
