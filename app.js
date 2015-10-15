/**
 * @desc app server main file
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-21
 */

'use strict';

/**
 * Module dependencies
 */
import express from 'express';
import http from 'http';

import conf_express from './config/express';
import conf_routes from './config/routes';
import conf_api from './config/api';

const app = express();

conf_express(app);
conf_api(app);
conf_routes(app);

app.set('port', process.env.PORT || 1999);

const server = http.Server(app).listen(app.get('port'), () => {
    console.log(`Robin server is listening on port ${server.address().port}`);
});

export default app;
