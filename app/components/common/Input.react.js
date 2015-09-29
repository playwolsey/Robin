/**
 * @desc @jsx Input React.DOM 
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-29
 */

'use strict';

import React from 'react/addons';

const Input = React.createClass({
    propTypes: {
        type: React.PropTypes.string,
        disabled: React.PropTypes.bool
    },

    getDefaultProps() {
        return {
            type: 'text'
        }
    },

    render() {
        return (
            null;
        );
    }
});

export default Input;
