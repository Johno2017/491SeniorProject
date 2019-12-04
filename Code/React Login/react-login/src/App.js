import React, {Component} from 'react';
import './App.css';
import Home from './Home.js';
import Login from './Login';
import fire from './config/Fire';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: null,
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
       
    <body className="App">
      {this.state.user ? (<Home/>) : (<Login/>)}
    </body>
    );
  }
 
}

export default App;
