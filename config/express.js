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
let swig = require('swig');


/**
 * Expose
 */
module.exports = (app) => {
    // Static files middleware
    app.use(express.static(path.join(__dirname, 'public')));
    

    // set views path, template engine and default layout
    app.engine('html', swig.renderFile);
    app.set('views', path.join(__dirname, '../app/views'));
    app.set('view engine', 'html');
};
