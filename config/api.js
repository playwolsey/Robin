/**
 * @desc routes
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-21
 */

'use strict';

/**
 * Module dependencies
 */
import index from '../app/controllers/index';
import accounts from '../app/controllers/accounts';

export default ((app) => {
    //app.get('/', index.index);
    app.get('/signup', accounts.signup);
});
