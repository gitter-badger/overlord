module.exports = (config) => {	
	this.RedisRepository = require('../../../repositories/RedisRepository.js');
	this.TwitchRepository = require('../../../repositories/TwitchRepository.js')(config);

	this.config = config;

	this.overlay = (req, res) => {
		var callback = (result) => {
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
		};

		this.TwitchRepository.getLastFollower(callback);
	}

	return this;
}