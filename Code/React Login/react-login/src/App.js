import React, {Component} from 'react';
import './App.css';
import Home from './pages/Home.js';
import LoginPage from './pages/LoginPage';
import fire from './config/Fire';
//import {db} from './config/Fire';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null
    }

    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if(user){
        this.setState({user});
      } else {
        this.setState({user: null});
      }
    })
  }
  
  render() {
     return (
    <div className="App">
      {this.state.user ? (<Home user={this.state.user}/>) : (<LoginPage/>)}
    </div>
    );
  }
 
}

export default App;
