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
const rename = require('gulp-rename');
const jshint = require('gulp-jshint');
const plumber = require('gulp-plumber');
const nodemon = require('gulp-nodemon');
const browserSync = require('browser-sync').create();
const babelify = require('babelify');
const browserify = require('browserify');
const source = require('vinyl-source-stream');
const streamify = require('gulp-streamify');


gulp.task('less', () => {
    return gulp.src(['app/client/less/**/*.less', '!app/client/less/common/**/*.less', '!app/client/less/**/{reset,test}.less'])
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('public/assets/css'));
});

gulp.task('scripts', () => {
    //return gulp.src(['app/client/javascript/**/*.js', '!app/client/javascript/**/{tests,test}.js'])
    //    .pipe(uglify())
    //    .pipe(jshint('.jshintrc'))
    //    .pipe(jshint.reporter('default'))
    //    .pipe(concat('test.js'))
    //    .pipe(rename({suffix: '.min'}))
    //    .pipe(gulp.dest('public/assets/js'));

    return browserify('app/client/javascript/main.js')
        .transform(babelify)
        .bundle()
        .pipe(source('bundle.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(streamify(uglify({ mangle: false })))
        .pipe(gulp.dest('public/assets/js'));
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
