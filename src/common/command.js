var websocket = require('../common/websocket');
var print = require('../common/printer');

function Command(command, payload) {

	websocket({

		command: command,
		payload: payload

	}, function(data) {

		print.status(data);

	});
}

module.exports = Command;
