import React from 'react';
import Login from '../components/Login';

class LoginPage extends React.Component {

    constructor(props){
        super(props);
    }

    render() {
        return(
        <div className = "background">
            <Login/>
        </div>
        );
    }
}

export default LoginPage;