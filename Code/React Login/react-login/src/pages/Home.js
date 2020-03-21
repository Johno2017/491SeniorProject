import React from 'react';
import Navbar from '../ReactComponents/Navbar.js';
import './Home.css';
import '../images/Logo.jpg';

class Home extends React.Component {

    render() {
        return (
            <div className="background">
                <Navbar />
                
            </div>
        );
    }
}

export default Home;