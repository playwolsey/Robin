/**
 * @desc @jsx Button React.DOM 
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-09-29
 */

'use strict';

import React from 'react/addons';

const Button = React.createClass({
    propTypes: {
        classPrefix: React.PropTypes.string.isRequired,
        active: React.PropTypes.bool,
        block: React.PropTypes.bool,
        disabled: React.PropTypes.bool,
        componentTag: React.PropTypes.node,
        href: React.PropTypes.string,
        target: React.PropTypes.string
    },

    getDefaultProps() {
        return {
            classPrefix: 'btn'
        };
    },

    renderAnchor() {
        let Component = this.props.componentTag || 'a';
        let href = this.props.href || '#';

        return (
            <Component {...this.props} href={href} className={this.props.className} role="button">
                {this.props.children}
            </Component>
        );
    },

    renderButton() {
        let Component = this.props.componentTag || 'button';

        return (
            <Component {...this.props} className={this.props.className}>
                {this.props.children}
            </Component>
        );
    },

    render() {
        let renderType = (this.props.href || this.props.target) ? 'renderAnchor' : 'renderButton';

        return this[renderType]()
    }
});

export default Button;
