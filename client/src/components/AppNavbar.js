import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class AppNavbar extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: false
        }
    }
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return(
        <div className="header">
            <h1>DecaHex</h1>
            <h1>My games</h1>
            <Link to="/register"><h1>Add games</h1></Link>
        </div>
        )
    }
}



export default AppNavbar