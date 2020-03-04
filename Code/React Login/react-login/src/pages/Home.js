import React from 'react';
import fire from '../config/Fire';
import Navbar from '../ReactComponents/Navbar.js';
import './Home.css';
import '../images/Logo.jpg';

class Home extends React.Component {

    logout = () => {

        fire.auth().signOut();

        window.alert("Successfully logged out");

    }

    render() {
        return (
            <div className="background">
                <Navbar />
                
            </div>
        );
    }
}

export default Home;