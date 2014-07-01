var Command = require('../common/command');

module.exports = function(repeat) {

	return new Command('setRepeat', repeat);

};
