'use strict'

let OD = require("./operator-display/operator-display.js");
let config = require("./config/db_config.json");

describe("Operations", () => {
	let service = null;
	let bucket = null;
	before(() => {
		service = new Qa();
		service.init();
	});
	describe("Operator-display service", () => {
		it("should mark ticket called", (done) => {
			return service.actionTicketCalled()
				.then((res) => {
					console.log(res);
					done();
				})
				.catch((err) => {
					done(err);
				});
		})
	})

});