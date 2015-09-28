/**
 * @desc @jsx sign up React.DOM 
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-23
 */

'use strict';

let React = require('react/addons');

const Signup = React.createClass({
    render() {
        return (
            <section>
                <input placeholder="手机号" />
                <input type="password" placeholder="密码" />
            </section>
        )
    }
});

module.exports = Signup;
