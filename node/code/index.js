const config = require('./config.json');
const web = require('./services/web');
const bot = require('./services/bot');

web.listen(config.web.port, function(err) {
	console.log(`Web service listening on port ${config.web.port}`);
});