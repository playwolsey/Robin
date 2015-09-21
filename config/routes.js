/**
 * @desc routes
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-21
 */

'use strict';

/**
 * Module dependencies
 */
let index = require('../app/controllers/index');

module.exports = (app) => {
    app.get('/', index.index);
};
