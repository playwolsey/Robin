'use strict';

/**
 * Module dependencies
 */
//import express from 'express'; // node4.1.0 not support es6 module
let express = require('express');
let app = express();
let http = require('http').Server(app);

require('./config/express')(app);
require('./config/routes')(app);

app.set('port', process.env.PORT || 1999);

let server = http.listen(app.get('port'), () => {
    console.log(`Robin server is listening on port ${server.address().port}`);
});

//export default app;
module.exports = app;
