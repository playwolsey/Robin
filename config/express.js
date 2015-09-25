/**
 * @desc express config
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-21
 */

'use strict';

/**
 * Module dependencies
 */
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let bodyParser = require('body-parser');
let favicon = require('serve-favicon');
let compression = require('compression');
let exphbs = require('express-handlebars');

let pkg = require('../package.json');


/**
 * Expose
 */
module.exports = (app) => {
    // Compression middleware (should be placed before express.static)
    app.use(compression({
        threshold: 512
    }));

    // Set favicon
    app.use(favicon(`${__dirname}/../app/public/favicon.ico`));

    // Static files middleware
    app.use(express.static(path.join(__dirname, '../app/public')));

    // Set views path, template engine and default layout
    app.engine('hbs', exphbs({defaultLayout: `${__dirname}/../app/views/layouts/mobile.hbs`, extname: 'hbs'}));
    app.set('views', path.join(__dirname, '../app/views'));
    app.set('view engine', 'hbs');
    

    // Expose package.json to views
    app.use((req, res, next) => {
        res.locals.pkg = pkg;
        res.locals.env = process.env.NODE_ENV || 'development';
        next();
    });

    // bodyParser should be above methodOverride
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));

    // CookieParser should be above session
    app.use(cookieParser());
    //app.use(cookieSession({ secret: 'secret' }));
};
