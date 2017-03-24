const redis = require('redis');

module.exports = (config) => {
	this.redis = null,

	this.init = () => {
		if ( null == this.redis ) {
			this.redis = redis.createClient('redis://redis:6379'); // @todo from config
		}
	};


	this.getCounter = (callback) => {
		this.init();

		let redis = this.redis;

		redis.get('COUNTER', callback);
	};

	this.incCounter = (callback) => {
		this.init();

		let redis = this.redis;

		redis.incr('COUNTER', callback);
	};

	this.saveFollowerNo = (number) => {
		let redis = this.redis;

		key = `FOLLOWERS:${config.twitch.username}`;

		redis.set(key, number);
	};

	this.init();

	return this;
}