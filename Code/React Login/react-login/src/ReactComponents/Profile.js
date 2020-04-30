import React from 'react';
import fire from '../config/Fire';
import './Profile.css'

class Profile extends React.Component{
    
    constructor(props){
        super(props);
    }


    render(){
        return(
            <div className = "dashboard-container">
                <div className="profile">
                    <h1>Test</h1>
                </div>
                <div className="my-list">
                    <h1>Test2</h1>
                </div>
            </div>
        );
    }

}

export default Profile;