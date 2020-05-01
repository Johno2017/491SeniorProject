import React from 'react';
import Navbar from '../ReactComponents/Navbar.js';
import Profile from '../ReactComponents/Profile.js';
import './Home.css';
import '../images/Logo.jpg';

class Home extends React.Component {

    constructor(props)
    {
        super(props);
        
        this.state = {
            viewer: false
        }

        this.navbarRendering = this.navbarRendering.bind(this);
    }

    navbarRendering = (selected) => {
        if(selected === 'Explore'){
            this.setState({
                viewer : true
            });
        }
        if(selected === 'Home'){
            this.setState({
                viewer : true
            });
        }
    }

    render() {
        return (
            <div className="background">
                <Navbar action={this.navbarRendering}/>
                <Profile user = {this.props.user}/>
            </div>
        );
    }
}

export default Home;