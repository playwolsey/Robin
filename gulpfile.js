/**
 * @desc express config
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-21
 */

'use strict';

let gulp = require('gulp');
let uglify = require('gulp-uglify');
let concat = require('gulp-concat');
let nodemon = require('gulp-nodemon');
let browserSync = require('browser-sync').create();

gulp.task('scripts', () => {
    console.log('scripts');
});

gulp.task('default', ['scripts']);
