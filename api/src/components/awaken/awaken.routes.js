const express = require('express');
const awakenController = require('./awaken.controller');

const awakenRouter = express.Router();

awakenRouter.get('/awaken', awakenController.get);

module.exports = awakenRouter;
