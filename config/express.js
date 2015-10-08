/**
 * @desc express config
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-21
 */

'use strict';

/**
 * Module dependencies
 */
import express from 'express';
import cookieParser from 'cookie-parser';
import bodyParser from 'body-parser';
import favicon from 'serve-favicon';
import compression from 'compression';
import exphbs from 'express-handlebars';
import swig from 'swig'; 

import pkg from '../package.json';


/**
 * Expose
 */
module.exports = (app) => {
    // Compression middleware (should be placed before express.static)
    app.use(compression({
        threshold: 512
    }));

    // Set favicon
    app.use(favicon(`${__dirname}/../public/favicon.ico`));

    // Static files middleware
    app.use(express.static(`${__dirname}/../public`));

    // Set views path, template engine and default layout
    //app.engine('hbs', exphbs({defaultLayout: `${__dirname}/../app/views/layouts/mobile.hbs`, extname: 'hbs'}));
    //app.set('views', `${__dirname}/../app/views`);
    //app.set('view engine', 'hbs');

    app.engine('html', swig.renderFile); 
    app.set('views', `${__dirname}/../app/views`);
    app.set('view engine', 'html'); 

    // For development
    app.set('view cache', false);
    swig.setDefaults({ cache: false });
    

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
