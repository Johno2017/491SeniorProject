import React from 'react';
import Navbar from '../ReactComponents/Navbar.js';
import Profile from '../ReactComponents/Profile.js';
import './Home.css';
import '../images/Logo.jpg';

class Home extends React.Component {

    constructor(props)
    {
        super(props);
    }

    render() {
        return (
            <div className="background">
                <Navbar />
                <Profile user = {this.props.user}/>
            </div>
        );
    }
}

export default Home;