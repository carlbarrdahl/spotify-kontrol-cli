var cli = require('../cli');
var print = require('../common/printer');
var websocket = require('../common/websocket');

function Command(command, payload) {

	websocket({

		command: command,
		payload: payload,
		channel: cli.config.get('channel')

	}, function(data) {

		if (data.msg === 'error') {

			return print.error(data.payload);
		}

		print.status(data);

	});
}

module.exports = Command;
