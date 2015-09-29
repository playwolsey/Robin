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

gulp.task('run', (cb) => {
    let started = false;

    nodemon({
        execMap: {
          js: 'node'
        },
        script: 'app.js'
    })
    .on('start', () => {
        if (!started) {
			cb();
            started = true; 
        } 
    })
    .on('restart', () => {
        setTimeout(() => {
            browserSync.reload({
                stream: false
            });
        }, 500);
    });
});

gulp.task('browser-sync', ['run'], () => {
	browserSync.init(null, {
		proxy: 'http://10.240.129.0:1999',
        files: [
            'app/public/**/*.*',
            'app/components/**/*.*'
        ],
        browser: ['google chrome'],
        port: 7000,
	});
});

gulp.task('default', ['browser-sync']);
