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
let favicon = require('serve-favicon');
let swig = require('swig');
let compression = require('compression');


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
    app.engine('html', swig.renderFile);
    app.set('views', path.join(__dirname, '../app/views'));
    app.set('view engine', 'html');
};
