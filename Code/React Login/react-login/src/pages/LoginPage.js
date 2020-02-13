import React from 'react';
import Login from '../components/Login';
import './LoginPage.css';

class LoginPage extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
        <div className = "background">
            <div className = "login-container">
                <Login/>
            </div>
        </div>
        );
    }
}

export default LoginPage;