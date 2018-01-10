'use strict';

var gulp = require('gulp');
var btcnanoTasks = require('btcnano-build');

btcnanoTasks('message');

gulp.task('default', ['lint', 'coverage']);
