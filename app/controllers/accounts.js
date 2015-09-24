/**
 * @desc accounts controller
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-21
 */

'use strict';

require('node-jsx').install();

let React = require('react/addons');
let Signup = React.createFactory(require('../components/Signup.react'));

exports.signup = (req, res) => {
    let markup = React.renderToString(Signup({}));

    res.render('accounts/signup', {
        title: 'signup',
        markup: markup
    });
};
