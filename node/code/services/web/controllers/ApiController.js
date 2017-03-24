module.exports = (config) => {
	this.config = config;

	this.TwitchRepository = require('../repositories/TwitchRepository.js')(config);

	this.getLastFollower = (req, res) => {
		let url = `/kraken/channels/${this.config.twitch.userid}/follows?limit=1`;

		var request = this;

		this.TwitchRepository.makeRequest(url, (result) => {
			if ( null != result ) {
				res.json(result['follows'][0]);
			} else {
				console.error('Not found');
			}
			res.end();
		});
	}

	return this;
}