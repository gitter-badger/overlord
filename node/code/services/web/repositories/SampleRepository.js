const redis = require('redis');

const SampleRepository = {
	redis: null,

	init: function() {
		if ( null == SampleRepository.redis ) {
			SampleRepository.redis = redis.createClient('redis://redis:6379'); // @todo from config
		}
	},


	getCounter: function(callback) {
		SampleRepository.init();

		let redis = SampleRepository.redis;

		redis.get('COUNTER', callback);
	},

	incCounter: function(callback) {
		SampleRepository.init();

		let redis = SampleRepository.redis;

		redis.incr('COUNTER', callback);
	}
}

module.exports = SampleRepository;