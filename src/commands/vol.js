var Command = require('../common/command');

module.exports = function(vol) {
	vol = vol > 1 ? vol / 100 : vol;

	return new Command('setVolume', vol);

};
