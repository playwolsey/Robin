'use strict';

//import express from 'express';
let express = require('express');
let app = express();
let http = require('http').Server(app);

app.set('port', process.env.PORT || 1999);

let server = http.listen(app.get('port'), () => {
    console.log(`Chopper server is listening on port ${server.address().port}`);
});

//export default app;
module.exports = app;
