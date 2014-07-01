var Command = require('../common/command');

module.exports = function(shuffle) {

	return new Command('setShuffle', shuffle);

};
