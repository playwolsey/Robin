/**
 * @desc routes
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-10-12
 */

'use strict';

/**
 * Module dependencies
 */
import React from 'react';
import Router, {Route} from 'react-router';
import swig from 'swig'; 
import App from '../app/components/App.react';
import Index from '../app/components/Index.react';
import NoMatch from '../app/components/NoMatch.react';

import pkg from '../package.json';

export const routes = (
    <Route handler={App}>
        <Route path='/' handler={Index} />
        <Route path="*" handler={NoMatch}/>
    </Route>
);

export default ((app) => {
    app.use((req, res) => {
        Router.run(routes, req.path, (Handler) => {
            let html = React.renderToString(React.createElement(Handler));
            let page = swig.renderFile('./app/views/index.html', { html: html, pkg: pkg });
            res.send(page);
        });
    });
});
