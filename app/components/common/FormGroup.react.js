/**
 * @desc @jsx FormGroup React.DOM 
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-30
 */

'use strict';

import React from 'react/addons';
import classNames from 'classnames';

const FormGroup = React.createClass({
    propTypes: {
        validation: React.PropTypes.string,
        hasFeedback: React.PropTypes.bool
    },

    render() {
        let classSet = {};

        classSet['form-group'] = true;
        this.props.validation && (classSet['form-' + this.props.validation] = true);
        classSet['form-feedback'] = this.props.hasFeedback;

        return (
            <div className={classNames(classSet, this.props.className)}>
                {this.props.children}
            </div>
        )
    }
});

export default FormGroup;
