const https = require('https');

module.exports = (config) => {
	this.config = config;
	this.RedisRepository = require('./RedisRepository')(config);

	this.makeRequest = (path, callback) => {
		let options = {
			host: 'api.twitch.tv',
			path: path,
			headers: {
				'Client-ID': this.config.twitch.client_id,
				'Accept': 'application/vnd.twitchtv.v5+json'
			}
		};

		let req = https.request(options, (res) => {
			var r = '';

			res.on('data', (chunk) => {
				r += chunk;
			});

			res.on('end', () => {
				r = JSON.parse(r);

				if ( null != r['_total'] ) {
					this.RedisRepository.saveFollowerNo(r['_total']);
				}

				callback(r);
			});
		});

		req.on('error', function(err) {
			console.error(err);
		});

		req.end();
	},

	this.getLastFollower = (callback) => {
		let url = `/kraken/channels/${this.config.twitch.userid}/follows?limit=1`;
		this.makeRequest(url, callback);
	};

	return this;
}
