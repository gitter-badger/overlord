const SampleRepository = require('../repositories/SampleRepository.js');

const MainController = {	
	home: function(req, res) {
		SampleRepository.getCounter(function(err, reply) {
			if ( null == reply ) {
				res.send({ counter: 0 });
			} else {
				res.send({ counter: reply });
			}
		});
	},

	inc: function(req, res) {
		SampleRepository.incCounter(function(err, reply) {
			if ( null == reply ) {
				res.send({ counter: 0 });
			} else {
				res.send({ counter: reply });
			}
		});
	} 
}

module.exports = MainController;