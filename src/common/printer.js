/*

OMG clean up this mess!!

 */

var colors = require('colors');

var whitespace = '      ';
var SCREEN_WIDTH = process.stdout.columns - whitespace.length * 2;

function parseArtists(artists) {
	artists = artists.map(function(artist) {
		return artist.name;
	});

	return artists.length > 1 ? artists.slice(0, -1).join(", ") + " & " + artists[artists.length - 1] : artists.join();
}

function printDuration(duration) {
	var x = duration / 1000;
	var seconds = (x % 60);
	seconds = seconds < 10 ? '0' + seconds : seconds;
	x /= 60;
	var minutes = Math.floor(x % 60);
	return minutes + ':' + seconds;
}

function printStatus(title, flag) {
	return flag ? title.bold.white : title.grey;
}

module.exports = {

	status: function(data) {
		console.log('');
		console.log(whitespace + printStatus('♫ ' + parseArtists(data.track.artists) + ' - ' + data.track.name, data.playing) +
		            whitespace + whitespace + printStatus('REPEAT', data.repeat) + ' ' + printStatus('SHUFFLE', data.shuffle));
		console.log(whitespace + ('DURATION: ' + printDuration(data.track.duration)) + whitespace + ('VOLUME: ' + Math.round(data.volume * 100) + '%'))
		this.progress(data.position / data.duration);
	},

	error: function(msg) {
		console.log('');
		console.log(whitespace + msg.bold.red);
	},

	progress: function(ratio) {
		var i;
		var position = Math.floor(SCREEN_WIDTH * ratio) || 0;
		var past = '|';
		var remaining = '';

		for (i = 0; i < position; i++) {
			past += '-';
		}

		if (position < SCREEN_WIDTH - 1) {

			past += 'o';
			for (i = position + 1; i < SCREEN_WIDTH; i++) {
				remaining += '-';
			}

		} else {

			for (i = position; i < SCREEN_WIDTH - 1; i++) {
				remaining += '-';
			}
		}

		console.log(whitespace + past.green.bold + remaining.bold + '|'.bold);
		console.log('');

	}
};
