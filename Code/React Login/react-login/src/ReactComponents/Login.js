import React from 'react';
import fire from '../config/Fire';
import {db} from '../config/Fire';
import './Login.css';

class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            register: false
        }
    }


    login = () => {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        
        fire.auth().signInWithEmailAndPassword(email,password).then((u)=> {
        }).catch((err)=> {
            window.alert(err.toString());
        })
    }

    signUp = () => {
        const email = document.querySelector("#email").value;
        const password = document.querySelector("#password").value;
        const name = document.querySelector('#name').value;
        const date = new Date();

        fire.auth().createUserWithEmailAndPassword(email,password).then((u)=> {
            window.alert("Successfully signed up");
        }).catch((err)=> {
            window.alert("Error: " + err.toString());
        });

        db.collection("Users").doc(email).set({
            Name: name,
            DateJoined: date,
            Email: email,
            savedRecipes: []
        });


    }


    toggleLogin = () => {
        this.setState({
            register : !this.state.register
        });
        console.log("Switching..");
    }

    render() {
        if(this.state.register){
            return (
            <div className = "login">
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
                    <div>
                    <h3 className = 'formHeading'>Name</h3>
                        <input className = 'input-box' id = "name" placeholder = "Enter Full Name..." type = "text"/>
                    </div>
                    <button className = 'button' style = {{margin: '10px'}} onClick = {this.toggleLogin}>Back To Login</button>
                    <button className = 'button' style = {{margin: '10px'}} onClick = {this.signUp}>Register</button>
                </div>
            </div>
        );
    }
    else
        {
        return (
            <div className = "login">
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
                    <button className = 'button' style = {{margin: '10px'}} onClick = {this.toggleLogin}>Create Account</button>
                </div>
            </div>
        );
        } 
    }
}

export default Login;