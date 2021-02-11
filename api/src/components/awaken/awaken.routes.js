const express = require('express');
const { awaken } = require('./awaken');

const awakenRouter = express.Router();

awakenRouter.get('/awaken', awaken);

module.exports = awakenRouter;
