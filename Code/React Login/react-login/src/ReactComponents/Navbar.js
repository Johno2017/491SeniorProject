import React from 'react';
import './Navbar.css'
import fire from '../config/Fire';

class Navbar extends React.Component {
    constructor(props){
        super(props);

        this.logout = this.logout.bind(this);
    }

    logout = () => {

        fire.auth().signOut();

        window.alert("Successfully logged out");

    }
    render(){
        return(
            <div className="nav">
                <img alt="Company Logo" id="logo" src={require("../images/Chef Hat.png")}/>
                <ul className="nav-list"> 
                    <button onClick={this.props.renderHome}>Home</button>
                    <button onClick={this.props.renderExplore}>Explore</button>
                    <button onClick={this.logout}>Sign Out</button>
                </ul>
            </div>
        );
    }
}

export default Navbar;