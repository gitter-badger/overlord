const express = require('express')
const app = express()

const MainController = require('./controllers/MainController.js');

app.get('/', MainController.home);

app.get('/inc', MainController.inc);

module.exports = app;