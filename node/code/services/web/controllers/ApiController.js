module.exports = (config) => {
	this.config = config;

	this.TwitchRepository = require('../../../repositories/TwitchRepository.js')(config);

	this.getLastFollower = (req, res) => {
		var callback = (result) => {
			if ( null != result ) {
				res.json(result['follows'][0]);
			} else {
				console.error('Not found');
			}
			res.end();
		};

		this.TwitchRepository.getLastFollower(callback);
	}

	return this;
}