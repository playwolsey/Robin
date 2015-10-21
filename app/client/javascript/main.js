/**
 * @desc client main.js, app client render
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-10-08
 */

import React from 'react';
import Router from 'react-router';
import { routes } from '../../../config/routes';

Router.run(routes, Router.HistoryLocation, (Handler) => {
    React.render(<Handler />, document.getElementById('app'));
});
