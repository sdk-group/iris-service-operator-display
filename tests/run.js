'use strict'

let path = require('path');

IrisWorkflow.initializer(config.buckets.main);

global.expect = require('chai')
	.expect;
global._ = require('lodash');
global.Promise = require('bluebird');

var gulp = require("gulp");
var mocha = require('gulp-mocha');

gulp.src('build/**/*.test.js', {
		read: false
	})
	.pipe(mocha());