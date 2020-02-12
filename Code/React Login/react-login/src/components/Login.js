import React from 'react';
import fire from '../config/Fire';
import './Login.css';

class Login extends React.Component {

    login = () => {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().signInWithEmailAndPassword(email,password).then((u)=> {
            window.alert("Successfully logged in");
        }).catch((err)=> {
            window.alert(err.toString());
        })
    }

    signUp = () => {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;

        fire.auth().createUserWithEmailAndPassword(email,password).then((u)=> {
            window.alert("Successfully signed up");
        }).catch((err)=> {
            window.alert("Error: " + err.toString());
        })
    }

    render() {
        return (
                <div className = "form-input" style = {{textAlign: 'center'}}>
                <h1 className = 'formHeading'>Welcome to Look N Cook!</h1>
                <div>
                    <h3 className = 'formHeading'>Email</h3>
                    <input className='input-box' id = "email" placeholder = "Enter your Email.." type = "email"/>
                </div>
                <div>
                <h3 className = 'formHeading'>Password</h3>
                    <input className = 'input-box' id = "password" placeholder = "Enter Password.." type = "password"/>
                </div>
                <button className = 'button' style = {{margin: '10px'}} onClick = {this.login}>Login</button>
                <button className = 'button' style = {{margin: '10px'}} onClick = {this.signUp}>SignUp</button>
                </div>
        );
    }
}

export default Login;