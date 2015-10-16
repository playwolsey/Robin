/**
 * @desc @jsx APP
 * @author awwwesssooooome <chengpengcp9@gmail.com>
 * @date 2015-10-12
 */

'use strict';

import React, { Component } from 'react/addons';
import { RouteHandler } from 'react-router';


// From airbnb
// bad
//const Listing = React.createClass({
//  render() {
//    return <div />;
//  }
//});
//
// good
//class Listing extends React.Component {
//  render() {
//    return <div />;
//  }
//}

class App extends Component {
    render() {
        return (
            <section>
                <RouteHandler />
            </section>
        )
    }
};

export default App;
