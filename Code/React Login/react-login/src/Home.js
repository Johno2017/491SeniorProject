import React from 'react';
import fire from './config/Fire';
import './Home.css';

class Home extends React.Component {

    logout = () => {

        fire.auth().signOut();

    }

    render() {
        return (
            <div>
                <h1 className = "welcomeHeader">Welcome to your online Kitchen!</h1>
                <button className = 'button' onClick = {this.logout}>Logout</button>
            </div>
        );
    }
}

export default Home;