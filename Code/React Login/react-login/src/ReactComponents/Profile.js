import React, { useReducer } from 'react';
import fire from '../config/Fire';
import {db} from '../config/Fire';
import './Profile.css'

class Profile extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            email: this.props.user.email,
            name: null,
            dateJoined: null
        };
    }

    componentDidMount(props, state)
    {
        if(this.state.email){
            var docRef = db.collection("Users").doc(this.state.email); //Firebase doesn't allow for multiple accounts with the same email. Therefore that makes it a good Indexer for user docs

            docRef.get().then(doc => {

                var date = doc.data().DateJoined;
                var dateString = date.toDate().toString()
                var dateTrimmed = dateString.substring(0,16)

                this.setState({
                    name: doc.data().Name,
                    dateJoined: dateTrimmed
                });
            });
        }
    }



    render(){
        return(
            <div className = "dashboard-container">
                <div className="profile">
                    <div className="profile-header">
                        <div className="profile-pic-container">
                            <img alt="Company Logo" id="logo" src={require("../images/Chef Hat.png")}/>
                        </div>
                        <h1>Hi {this.state.name}!</h1>
                        <br/>
                        <h1>Welcome to your dashboard! Happy cooking!</h1>
                        <br/>
                        <h1>Chef Since: {this.state.dateJoined}</h1>
                    </div>
                </div>
                <div className="my-list">
                    
                </div>
            </div>
        );
    }

}

export default Profile;