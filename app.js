'use strict';

/**
 * Module dependencies
 */
import express from 'express';
import http from 'http';

import conf_express from './config/express';
import conf_routes from './config/routes';

let app = express();

conf_express(app);
conf_routes(app);

app.set('port', process.env.PORT || 1999);

let server = http.Server(app).listen(app.get('port'), () => {
    console.log(`Robin server is listening on port ${server.address().port}`);
});

export default app;
