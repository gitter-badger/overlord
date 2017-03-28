const express = require('express');
const app = express();

const fs = require('fs');

const config = require('../../config.json');

app.set('views', __dirname + `/${config.web.views_dir}`);
app.set('view engine', 'pug');

const MainController = require('./controllers/MainController.js')(config);
const ApiController = require('./controllers/ApiController.js')(config);

app.get('/', (req, res) => {
	res.send('ok');
});

app.get('/overlay', MainController.overlay);

app.get('/api/last-follower', ApiController.getLastFollower);

module.exports = app;