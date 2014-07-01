module.exports = function(action, callback) {

	var WebSocket = require('ws');
	var ws = new WebSocket('ws://localhost:8080');

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
