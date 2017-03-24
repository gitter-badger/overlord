module.exports = (config) => {	
	this.RedisRepository = require('../repositories/RedisRepository.js');
	this.TwitchRepository = require('../repositories/TwitchRepository.js')(config);

	this.config = config;

	this.home = (req, res) => {
		this.RedisRepository.getCounter(function(err, reply) {
			if ( null == reply ) {
				res.send({ counter: 0 });
			} else {
				res.send({ counter: reply });
			}
		});
	},

	this.inc = (req, res) => {
		this.RedisRepository.incCounter(function(err, reply) {
			if ( null == reply ) {
				res.send({ counter: 0 });
			} else {
				res.send({ counter: reply });
			}
		});
	},

	this.pug = (req, res) => {
		let url = `/kraken/channels/${this.config.twitch.userid}/follows?limit=1`;

		var request = this;

		this.TwitchRepository.makeRequest(url, (result) => {
			if ( null != result ) {
				var tvars = {
					username: 'barveyhirdman',
					latest_follower: result['follows'][0]
				};
				res.render('index', tvars);
			} else {
				console.error('Not found');
				res.end();
			}
		});
	}

	return this;
}