import React, { Component } from 'react'
import { Link } from 'react-router-dom'


class NavbarHeader extends Component {
    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <span className="navbar-brand">
                            <Link to="/">Routing Demo App</Link>
                        </span>
                    </div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/about">About</Link></li>
                        <li><Link to="/directory">Employee Directory</Link></li>
                    </ul>
                </div>
            </nav>
        )
    }
}

export default NavbarHeader