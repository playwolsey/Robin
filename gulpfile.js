/**
 * @desc gulp config
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-29
 */

'use strict';

const gulp = require('gulp');
const uglify = require('gulp-uglify');
const concat = require('gulp-concat');
const less = require('gulp-less');
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const plumber = require('gulp-plumber');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();


gulp.task('less', () => {
    return gulp.src(['app/client/less/**/*.less', '!app/client/less/common/**/*.less', '!app/client/less/**/{reset,test}.less'])
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('public/assets/css'))
});

gulp.task('watch', () => {
    gulp.watch('app/client/less/**/*.less', ['less']);
    //gulp.watch('public/javascripts/**/*.js', ['build']);
    //gulp.watch('public/css/**/*.less', ['build']);
    //gulp.watch('components/**/*.jsx', ['build']);
    //gulp.watch('components/**/*.less', ['build']);
});

gulp.task('run', ['watch'], (cb) => {
    let started = false;

    nodemon({
        //execMap: {
        //  js: 'node'
        //},
        //script: 'app.js',
        exec: 'npm start'
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
