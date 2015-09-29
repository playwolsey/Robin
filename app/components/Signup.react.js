/**
 * @desc @jsx sign up React.DOM 
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-23
 */

'use strict';

import React from 'react/addons';
import Button from './common/Button.react';

const Signup = React.createClass({
    render() {
        return (
            <section>
                <input placeholder="手机号" />
                <input type="password" placeholder="密码" />
                <Button>登录</Button>
            </section>
        )
    }
});

export default Signup;
