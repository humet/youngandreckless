import React, { Component } from 'react';
import PropTypes from "prop-types"
import Router from "next/router"
import withGA from "next-ga"

import "./layout.scss"

class Layout extends Component {
    componentDidMount() {
        const ReactPixel = require('react-facebook-pixel').default;
        ReactPixel.init('2441383812609484');
        ReactPixel.pageView(); 
    }

    render() {
        return (
            <div className="wrapper" style={{ backgroundImage: `url(/static/images/background.jpg)`, backgroundSize: `cover`, textAlign: `center` }}>
                <main>
                    {this.props.children}
                </main>
            </div>
        )
    }
}

Layout.propTypes = {
    children: PropTypes.node.isRequired,
}
  
export default withGA("UA-125423213-5", Router)(Layout);