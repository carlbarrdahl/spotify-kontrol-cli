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

			recipient.send(JSON.stringify(data));

		} catch (e) {

			ws.send(JSON.stringify({msg: 'error', payload: 'Unable to connect to Spotify. Make sure the app is running and connected!'}));
			console.error(e);

		}
	});
});

function setSockets(ws) {
	var origin = ws.upgradeReq.headers.origin.split(':')[0];

	if (origin === 'sp') {

		spotify = ws;

	} else {

		cli = ws;

	}
}
