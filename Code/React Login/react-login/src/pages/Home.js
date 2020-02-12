import React from 'react';
import fire from '../config/Fire';
import './Home.css';
import '../images/Logo.jpg';

class Home extends React.Component {

    logout = () => {

        fire.auth().signOut();

        window.alert("Successfully logged out");

    }

    render() {
        return (
            <div>
                <h1 className = "welcomeHeader">Welcome to your online kitchen!</h1>
                <button className = 'button' onClick = {this.logout}>Logout</button>
                <img style={{width: 500, height: 500}} src={require('../images/Chef Hat.png')} />
                
            </div>
        );
    }
}

export default Home;