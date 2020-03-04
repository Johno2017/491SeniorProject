import React from 'react';
import './Navbar.css'

class Navbar extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return(
            <div className="nav-container">
                <ul className="nav-list">
                    <li>Home</li>
                    <li>Explore</li>
                    <li>Recipes</li>
                    <li>Settings</li>
                </ul>
            </div>
        );
    }
}

export default Navbar;