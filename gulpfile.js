/**
 * @desc gulp config
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-29
 */

'use strict';

const gulp = require('gulp');
const gutil = require('gulp-util');
const gulpif = require('gulp-if');
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
const watchify = require('watchify');
const source = require('vinyl-source-stream');
const streamify = require('gulp-streamify');

const production = process.env.NODE_ENV === 'production';
const dependencies = [
    'react',
    'react-router'
];


gulp.task('less', () => {
    return gulp.src(['app/client/less/**/*.less', '!app/client/less/common/**/*.less', '!app/client/less/**/{reset,test}.less'])
        .pipe(plumber())
        .pipe(less())
        .pipe(autoprefixer())
        .pipe(cssmin())
        .pipe(gulp.dest('public/assets/css'));
});

gulp.task('less-watch', () => {
    gulp.watch('app/client/less/**/*.less', ['less']);
});

gulp.task('vendors', () => {
    return browserify()
        .require(dependencies)
        .bundle()
        .pipe(source('vendors.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulpif(production, streamify(uglify({ mangle: false }))))
        .pipe(gulp.dest('public/assets/js'));
});

gulp.task('scripts', () => {
    return browserify('app/client/javascript/main.js')
        .transform(babelify)
        .bundle()
        .pipe(source('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulpif(production, streamify(uglify({ mangle: false }))))
        .pipe(gulp.dest('public/assets/js'));
});

gulp.task('scripts-watch', ['vendors'], function() {
    let bundler = watchify(browserify('app/client/javascript/main.js', watchify.args));
    bundler.external(dependencies);
    bundler.transform(babelify);
    bundler.on('update', rebundle);
    return rebundle();

    function rebundle() {
        let start = Date.now();
        return bundler.bundle()
        .on('error', (err) => {
            gutil.log(gutil.colors.red(err.toString()));
        })
        .on('end', () => {
            gutil.log(gutil.colors.green('Finished rebundling in', (Date.now() - start) + 'ms.'));
        })
        .pipe(source('main.js'))
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('public/assets/js/'));
    }
});

gulp.task('run', ['less-watch', 'scripts-watch'], (cb) => {
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
            'app/client/**/*.*',
            'app/components/**/*.*'
        ],
        browser: ['google chrome'],
        port: 7000,
    });
});

gulp.task('default', ['browser-sync']);
gulp.task('build', ['less', 'vendors', 'scripts']);
