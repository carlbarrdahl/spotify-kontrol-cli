module.exports = function(action, callback) {

	var cli = require('../cli');
	var WebSocket = require('ws');

	var ws = new WebSocket(cli.config.get('server') || 'ws://localhost:8080');

	ws.on('error', function(err) {
		console.log('');
		console.log('Couldn\'t connect to the WebSocket server'.red);
	});

	ws.on('open', function() {
		ws.send(JSON.stringify(action));

		if (callback) {

			ws.on('message', function(data) {
				data = JSON.parse(data);

				callback(data);

				ws.close();
			});

		} else {

			ws.close();

		}
	});

	return ws;
};
