/**
 * spotify remote cli app
 * Carl Barrdahl <carlbarrdahl@gmail.com>
 * (c) 2014 MIT Licensed
 */

var path = require('path');
var colors = require('colors');
var flatiron = require('flatiron');

var app = module.exports = flatiron.app;


app.use(flatiron.plugins.cli, {
	usage: require('./common/usage.js'),
	source: path.join(__dirname, './commands'),
});

app.start = function(callback) {

	app.init(function(err) {
		if (err) {
			return callback(err);
		}

		app.router.dispatch('on', app.argv._.join(' '), app.log, function(err) {
			callback(err);
		});
	});
};
