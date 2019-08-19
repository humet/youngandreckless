import React from "react"
import PropTypes from "prop-types"

import "./layout.scss"

const Layout = ({ children }) => (
    <div className="wrapper" style={{ backgroundImage: `url(/static/images/background.jpg)`, backgroundSize: `cover`, textAlign: `center` }}>
        <main>
            {children}
        </main>
    </div>
)

Layout.propTypes = {
    children: PropTypes.node.isRequired,
  }
  
export default Layout