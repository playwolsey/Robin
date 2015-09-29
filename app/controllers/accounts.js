/**
 * @desc accounts controller
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-21
 */

'use strict';

require('node-jsx').install();

import React from 'react/addons';
import Signup from '../components/Signup.react';

let signup = React.createFactory(Signup);

exports.signup = (req, res) => {
    let markup = React.renderToString(signup({}));

    res.render('accounts/signup', {
        title: 'signup',
        markup: markup
    });
};
