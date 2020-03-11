import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class NotFound extends React.Component {

    render() {
        return (
            <div>
                <Header />
                <div className="container text-center">
                    <h1>404</h1>
                    <h5> Not Found</h5>
                    <Link to="/">Go Back Home</Link>
                </div>
            </div>
        )
    }
}

export default NotFound;