/**
 * @desc accounts controller
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-21
 */

'use strict';

require('node-jsx').install();

let React = require('react');
let Signup = require('../components/Signup.react');

exports.signup = (req, res) => {
    let markup = React.renderComponentToString(
        Signup()
    );

    res.render('404', {
        title: 'signup',
        markup: markup
    });
};
