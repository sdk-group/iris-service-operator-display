'use strict'

let events = {
	'operator-display': {}
};

let tasks = [];


module.exports = {
	module: require('./operator-display.js'),
	permissions: [],
	exposed: true,
	tasks: tasks,
	events: {
		group: 'operator-display',
		shorthands: events['operator-display']
	}
};