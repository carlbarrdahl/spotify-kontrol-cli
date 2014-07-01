#!/usr/bin/env node

var kontrol = require('../src/cli.js');

kontrol.start(function (err) {
	process.exit(err ? 1 : 0);
});
