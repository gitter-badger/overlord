const redis = require('redis');

module.exports = (config) => {
	this.redis = null;
	this.config = config;

	this.init = () => {
		if ( null == this.redis ) {
			let url = `redis://${this.config.redis.host}:${this.config.redis.port}`;
			this.redis = redis.createClient(url); // @todo from config
		}
	};

	this.saveFollowerNo = (number) => {
		let redis = this.redis;

		key = `FOLLOWERS:${config.twitch.username}`;

		redis.set(key, number);
	};

	this.init();

	return this;
}