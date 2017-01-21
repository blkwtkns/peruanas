// ./src/components/Main.js
import React, {Component} from 'react';
import { Link } from 'react-router';
import './../styles/Main.css'

class Main extends Component {
    render(){
        return(
            <div>
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                            <Link className="navbar-brand" to="/">RaicesPeruanas</Link>
                        </div>
                        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
                            <ul className="nav navbar-nav">
                                <li><Link to="/">Home</Link></li>
                                <li><Link to="/history">History</Link></li>
                                <li><Link to="/about">About</Link></li>
                                <li><Link to="/dances">Dances</Link></li>
                                <li><Link to="/photos">Photos</Link></li>
                                <li><Link to="/news">News</Link></li>
                                <li><Link to="/dancers">Dancers</Link></li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="container-fluid">
                    {this.props.children}
                </div>
            </div>
        );
    }
}

export default Main;
