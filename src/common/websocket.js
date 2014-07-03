module.exports = function(action, callback) {

	var cli = require('../cli');
	var WebSocket = require('ws');
	var print = require('../common/printer');

	var ws = new WebSocket('ws://kontrol-app.herokuapp.com');

	ws.on('error', function(err) {
		print.error('Couldn\'t connect to the WebSocket server');
		process.exit(1);
	});

	ws.on('open', function() {

		if (!action.channel) {
			callback({
				msg: 'error',
				payload: 'No channel set in config!'
			});

			return process.exit(1);
		}

		ws.send(JSON.stringify(action));

		ws.on('message', function(data) {
			data = JSON.parse(data);

			callback(data);

			ws.close();
		});
	});

	return ws;

};
