var websocket = require('../common/websocket');
var print = require('../common/printer');

function Command(command, payload) {

	websocket({

		command: command,
		payload: payload

	}, function(data) {

		if (data.msg === 'error') {

			return print.error(data.payload);
		}

		print.status(data);

	});
}

module.exports = Command;
