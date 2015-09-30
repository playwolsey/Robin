/**
 * @desc @jsx Input React.DOM 
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-29
 */

'use strict';

import React from 'react/addons';

import FormGroup from './FormGroup';
import Button from './Button';

const Input = React.createClass({
    propTypes: {
        type: React.PropTypes.string,
        groupClassName: React.PropTypes.string,
        disabled: React.PropTypes.bool,
        validation: React.PropTypes.oneOf(['success', 'warning', 'error']),
        hasFeedback: React.PropTypes.bool,
        id: React.PropTypes.string,
        label: React.PropTypes.node
    },

    getDefaultProps() {
        return {
            type: 'text'
        }
    },

    renderLabel(children) {
        let classSet = {};

        if (this.isCheckboxOrRadio()) {
            this.props.inline && (classSet[this.props.type + '-inline'] = true);
        } else {
            classSet['form-label'] = true;
        }

        return this.props.label ? (
            <label htmlFor={this.props.id} className={classNames(this.props.labelClassName, classSet)} key="label">
                {children}
                {this.props.label}
            </label>
        ) : children;
    },

    renderInput() {
    },

    render() {
        let groupClassName = classNames(
            this.props.type === 'select' ? 'form-select' : null,
            this.props.groupClassName
        );

        return (
            <FormGroup className={groupClassName} validation={this.props.validation} hasFeedback={this.props.hasFeedback}>
                {[
                    this.renderLabel(),
                    this.renderInput()
                ]}
            </FormGroup>
        );
    }
});

export default Input;
