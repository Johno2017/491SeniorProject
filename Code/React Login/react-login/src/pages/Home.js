import React from 'react';
import Navbar from '../ReactComponents/Navbar.js';
import Profile from '../ReactComponents/Profile.js';
import Explore from '../ReactComponents/Explore.js';
import './Home.css';
import '../images/Logo.jpg';

class Home extends React.Component {

    constructor(props)
    {
        super(props);
        
        this.state = {
            viewer: false,
            recipeScreen: false
        }

        this.renderExplore = this.renderExplore.bind(this);
        this.renderHome = this.renderHome.bind(this);
        
    }

    renderExplore = () => {
        this.setState({
            viewer: true
        });
    }

    renderHome = () => {
        this.setState({
            viewer: false
        });
    }

    render() {
        return (
            <div className="background">
                <Navbar renderExplore={this.renderExplore} renderHome={this.renderHome}/>
                {this.state.viewer ? <Explore/> : <Profile user = {this.props.user}/> }
            </div>
        );
    }
}

export default Home;