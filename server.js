var WebSocketServer = require('ws').Server,
	wss = new WebSocketServer({
		port: 8080
	});

// Socket connections
var spotify;
var cli;


wss.on('connection', function(ws) {

	setSockets(ws);

	ws.on('message', function(data) {
		data = JSON.parse(data);

		var recipient = ws === spotify ? cli : spotify;

		try {

			send(recipient, data);

		} catch (e) {

			throw new Error(e);

		}
	});
});

function send(ws, data) {
	try {

		ws.send(JSON.stringify(data));

	} catch (e) {

		throw new Error(e);

	}
}

function setSockets(ws) {
	var origin = ws.upgradeReq.headers.origin.split(':')[0];

	if (origin === 'sp') {

		spotify = ws;

	} else {

		cli = ws;

	}
}
