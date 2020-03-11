import React from 'react';
import { Link } from 'react-router-dom';
import { siteName } from '../helpers';

class Header extends React.Component {

    render() {
        return (
            <nav className="navbar navbar-expand-lg navbar-dark bg-inverse fixed-top">
                <div className="container-fluid">
                    <Link to="/" className="navbar-brand">{siteName} </Link>
                </div>
            </nav>
        )
    }
}

export default Header;