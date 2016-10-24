'use strict'


class OperatorDisplay {
	constructor() {
		this.emitter = message_bus;
	}

	init() {

	}

	launch() {
		return Promise.resolve(true);
	}

	//API
	actionBootstrap({}) {
		return Promise.resolve({
			success: true
		});
	}

	actionReady({}) {
		return Promise.resolve({
			success: true
		});
	}
}

module.exports = OperatorDisplay;