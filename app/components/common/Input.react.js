/**
 * @desc @jsx Input React.DOM 
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-29
 */

'use strict';

import React from 'react/addons';
import classNames from 'classnames';

import FormGroup from './FormGroup.react';
import Button from './Button.react';

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

    isCheckboxOrRadio() {
        return this.props.type === 'radio' || this.props.type === 'checkbox';
    },

    isFile: function() {
        return this.props.type === 'file';
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
        let input = null;
        let fieldClassName = (this.isCheckboxOrRadio() || this.isFile()) ? '' : 'form-field';
        let classes = classNames(this.props.className, fieldClassName);

        switch (this.props.type) {
            case 'select':
                input = (
                    <select {...this.props} className={classes} ref="field" key="field">
                        {this.props.children}
                    </select>
                );
            break;
            case 'textarea':
                input = (
                    <textarea {...this.props} className={classes} ref="field" key="field"/>
                );
            break;
            case 'submit':
                case 'reset':
                input = (
                    <Button {...this.props} componentTag="input" ref="field" key="field"/>
                );
            break;
            default:
                input = (
                    <input {...this.props} className={classes} ref="field" key="field"/>
                );
        }

        return input;
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
