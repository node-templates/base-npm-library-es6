/**
 *   ___             _   ___                       EventSauce
 *   | __|_ _____ _ _| |_/ __| __ _ _  _ __ ___    CQRS / Event Sourcing Framework for NodeJS
 *   | _|\ V / -_) ' \  _\__ \/ _` | || / _/ -_)   (c) 2016 Steve Gray / eventualconsistency.net
 *   |___|\_/\___|_||_\__|___/\__,_|\_,_\__\___|   This code is GPL v2.0 licenced.
 **/
 'use strict';

const documentation = require('./bld/documentation');
const instrument = require('./bld/instrument-coverage');
const lint = require('./bld/lint');
const lintTests = require('./bld/lint-tests');
const test = require('./bld/test.js');
const gulp = require('gulp');

gulp.task('docs', documentation);
gulp.task('lint-lib', lint);
gulp.task('lint-tests', lintTests);
gulp.task('lint', ['lint-lib', 'lint-tests']);
gulp.task('instrument-coverage', instrument);
gulp.task('test', ['instrument-coverage'], test);
gulp.task('default', ['docs', 'lint', 'test']);